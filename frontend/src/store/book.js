import {create} from "zustand";

export const useProductStore = create((set) => ({
    books: [],
    setBooks: (books) => set({ books}),
    createProduct: async (newBook) => {
        if (!newBook.name || !newBook.price || !newBook.image){
            return {success: false, message:"Please fill in all fields."}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newBook)
        })
        const data = await res.json();
    }
}));
