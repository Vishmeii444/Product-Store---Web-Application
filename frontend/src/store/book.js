import { create } from "zustand";

export const useProductStore = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
  createProduct: async (newBook) => {
    if (!newBook.name || !newBook.price || !newBook.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }));
    return { success: true, message: "Product created successfully." };
  },
  fetchBooks: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ books: data.data });
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/prodcts/${pid}`, {
        method: "DELETE",
    });
    const data = await res.json();
    if(!data.success) return {success: false, message: data.message};

    // use the filter method to delete the current product from the state
    set(state => ({ books: statebooks.filter(book => book._id !== pid)}));
  }
}));
