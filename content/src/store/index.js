import create from "zustand";

export const store = create((set) => ({
  title: "Store App",
  setTitle: (title) =>
    set((state) => ({
      ...state,
      title,
    })),
}));
