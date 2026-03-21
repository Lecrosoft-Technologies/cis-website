import { useState } from "react";
import { Package, FileText, Plus, Pencil, Trash2, X, Save, LayoutDashboard, Image, DollarSign, Tag } from "lucide-react";
import { useProductStore, useBlogStore } from "@/hooks/useProductStore";
import type { Product, BlogPost } from "@/data/products";

type Tab = "dashboard" | "products" | "blog";

const Admin = () => {
  const [tab, setTab] = useState<Tab>("dashboard");
  const { products, addProduct, updateProduct, deleteProduct } = useProductStore();
  const { posts, addPost, updatePost, deletePost } = useBlogStore();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);

  const [pForm, setPForm] = useState({ title: "", description: "", price: "", category: "", image: "", badge: "", featured: false });
  const [bForm, setBForm] = useState({ title: "", excerpt: "", content: "", image: "", author: "", category: "", date: "" });

  const openProductEdit = (p: Product) => {
    setEditingProduct(p);
    setPForm({ title: p.title, description: p.description, price: p.price, category: p.category, image: p.image, badge: p.badge || "", featured: p.featured || false });
    setShowProductForm(true);
  };

  const openProductNew = () => {
    setEditingProduct(null);
    setPForm({ title: "", description: "", price: "", category: "", image: "", badge: "", featured: false });
    setShowProductForm(true);
  };

  const saveProduct = () => {
    if (!pForm.title) return;
    if (editingProduct) {
      updateProduct(editingProduct.id, { ...pForm, badge: pForm.badge || undefined });
    } else {
      addProduct({ ...pForm, badge: pForm.badge || undefined });
    }
    setShowProductForm(false);
  };

  const openPostEdit = (p: BlogPost) => {
    setEditingPost(p);
    setBForm({ title: p.title, excerpt: p.excerpt, content: p.content, image: p.image, author: p.author, category: p.category, date: p.date });
    setShowPostForm(true);
  };

  const openPostNew = () => {
    setEditingPost(null);
    setBForm({ title: "", excerpt: "", content: "", image: "", author: "", category: "", date: new Date().toISOString().split("T")[0] });
    setShowPostForm(true);
  };

  const savePost = () => {
    if (!bForm.title) return;
    if (editingPost) {
      updatePost(editingPost.id, bForm);
    } else {
      addPost(bForm);
    }
    setShowPostForm(false);
  };

  const tabs = [
    { id: "dashboard" as Tab, label: "Dashboard", icon: LayoutDashboard },
    { id: "products" as Tab, label: "Products", icon: Package },
    { id: "blog" as Tab, label: "Blog", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary-foreground font-display">CIS Admin</h1>
          <div className="flex gap-2">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${tab === t.id ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"}`}>
                <t.icon className="w-4 h-4" /> {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Products", value: products.length, icon: Package, color: "from-primary to-secondary" },
              { label: "Blog Posts", value: posts.length, icon: FileText, color: "from-secondary to-cis-lime" },
              { label: "Categories", value: [...new Set(products.map(p => p.category))].length, icon: Tag, color: "from-primary to-primary" },
              { label: "Featured", value: products.filter(p => p.featured).length, icon: Image, color: "from-cis-lime to-secondary" },
            ].map(s => (
              <div key={s.label} className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-3xl font-bold text-foreground font-display">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Products */}
        {tab === "products" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground font-display">Products</h2>
              <button onClick={openProductNew} className="btn-pill-primary text-xs"><Plus className="w-4 h-4" /> Add Product</button>
            </div>
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-border/50 bg-muted/30">
                  <th className="text-left p-4 font-semibold text-muted-foreground">Image</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Title</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground hidden md:table-cell">Category</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Price</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Actions</th>
                </tr></thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                      <td className="p-4"><img src={p.image} alt={p.title} className="w-14 h-14 rounded-xl object-cover" /></td>
                      <td className="p-4 font-medium text-foreground">{p.title} {p.badge && <span className="ml-2 text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{p.badge}</span>}</td>
                      <td className="p-4 text-muted-foreground hidden md:table-cell">{p.category}</td>
                      <td className="p-4 text-primary font-semibold">{p.price}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button onClick={() => openProductEdit(p)} className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"><Pencil className="w-3.5 h-3.5 text-primary" /></button>
                          <button onClick={() => deleteProduct(p.id)} className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"><Trash2 className="w-3.5 h-3.5 text-destructive" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Blog */}
        {tab === "blog" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground font-display">Blog Posts</h2>
              <button onClick={openPostNew} className="btn-pill-primary text-xs"><Plus className="w-4 h-4" /> New Post</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(p => (
                <div key={p.id} className="bg-card rounded-2xl border border-border/50 overflow-hidden group">
                  <div className="h-40 overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover" /></div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold">{p.category}</span>
                    <h3 className="font-bold text-foreground mt-1 mb-2 font-display text-sm">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{p.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{p.date}</span>
                      <div className="flex gap-2">
                        <button onClick={() => openPostEdit(p)} className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center"><Pencil className="w-3 h-3 text-primary" /></button>
                        <button onClick={() => deletePost(p.id)} className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center"><Trash2 className="w-3 h-3 text-destructive" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {showProductForm && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setShowProductForm(false)}>
          <div className="bg-card rounded-3xl p-8 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-display">{editingProduct ? "Edit Product" : "New Product"}</h3>
              <button onClick={() => setShowProductForm(false)} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Title", key: "title", type: "text" },
                { label: "Description", key: "description", type: "text" },
                { label: "Price", key: "price", type: "text" },
                { label: "Category", key: "category", type: "text" },
                { label: "Image URL", key: "image", type: "text" },
                { label: "Badge", key: "badge", type: "text" },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold mb-1.5">{f.label}</label>
                  <input type={f.type} value={(pForm as any)[f.key]} onChange={e => setPForm({ ...pForm, [f.key]: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              ))}
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={pForm.featured} onChange={e => setPForm({ ...pForm, featured: e.target.checked })} className="rounded" /> Featured product</label>
              <button onClick={saveProduct} className="w-full btn-pill-primary justify-center"><Save className="w-4 h-4" /> Save Product</button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {showPostForm && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setShowPostForm(false)}>
          <div className="bg-card rounded-3xl p-8 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-display">{editingPost ? "Edit Post" : "New Post"}</h3>
              <button onClick={() => setShowPostForm(false)} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Title", key: "title" },
                { label: "Excerpt", key: "excerpt" },
                { label: "Image URL", key: "image" },
                { label: "Author", key: "author" },
                { label: "Category", key: "category" },
                { label: "Date", key: "date" },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold mb-1.5">{f.label}</label>
                  <input type={f.key === "date" ? "date" : "text"} value={(bForm as any)[f.key]} onChange={e => setBForm({ ...bForm, [f.key]: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5">Content</label>
                <textarea rows={4} value={bForm.content} onChange={e => setBForm({ ...bForm, content: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" />
              </div>
              <button onClick={savePost} className="w-full btn-pill-primary justify-center"><Save className="w-4 h-4" /> Save Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
