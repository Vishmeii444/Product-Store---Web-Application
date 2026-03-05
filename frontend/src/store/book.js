import {create} from "zustand";

export const useProductStore = create((set) => ({
    books: [],
    setBooks: (books) => set({ books}),
}));
