import { useState, useCallback } from "react";
import { Product, BlogPost, initialProducts, initialBlogPosts } from "@/data/products";

// Simple in-memory store — API-ready: swap with fetch calls
export const useProductStore = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("cis_products");
    return stored ? JSON.parse(stored) : initialProducts;
  });

  const persist = (items: Product[]) => {
    setProducts(items);
    localStorage.setItem("cis_products", JSON.stringify(items));
  };

  const addProduct = useCallback((p: Omit<Product, "id">) => {
    const newP = { ...p, id: Date.now().toString() };
    persist([...products, newP]);
    return newP;
  }, [products]);

  const updateProduct = useCallback((id: string, data: Partial<Product>) => {
    persist(products.map(p => p.id === id ? { ...p, ...data } : p));
  }, [products]);

  const deleteProduct = useCallback((id: string) => {
    persist(products.filter(p => p.id !== id));
  }, [products]);

  return { products, addProduct, updateProduct, deleteProduct };
};

export const useBlogStore = () => {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const stored = localStorage.getItem("cis_blog");
    return stored ? JSON.parse(stored) : initialBlogPosts;
  });

  const persist = (items: BlogPost[]) => {
    setPosts(items);
    localStorage.setItem("cis_blog", JSON.stringify(items));
  };

  const addPost = useCallback((p: Omit<BlogPost, "id">) => {
    const newP = { ...p, id: Date.now().toString() };
    persist([...posts, newP]);
    return newP;
  }, [posts]);

  const updatePost = useCallback((id: string, data: Partial<BlogPost>) => {
    persist(posts.map(p => p.id === id ? { ...p, ...data } : p));
  }, [posts]);

  const deletePost = useCallback((id: string) => {
    persist(posts.filter(p => p.id !== id));
  }, [posts]);

  return { posts, addPost, updatePost, deletePost };
};
