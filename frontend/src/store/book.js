import { create } from "zustand";

export const useProductStore = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
  
  createBook: async (newBook) => {
    if (!newBook.name || !newBook.price || !newBook.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }));
    return { success: true, message: "Book created successfully." };
  },

  fetchBooks: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ books: data.data });
  },

  deleteBook: async (pid) => {
    // Fixed typo: was "/api/prodcts/"
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Fixed typo: was "statebooks"
    set((state) => ({ books: state.books.filter((book) => book._id !== pid) }));
    return { success: true, message: data.message };
  }
}));
