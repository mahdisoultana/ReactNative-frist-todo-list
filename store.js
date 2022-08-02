import create from "zustand";
import { initData } from "./initData";

export const useStore = create((set, get) => ({
  data: [...initData],
  addGoal: (item) => set((prevS) => ({ data: [item, ...prevS.data] })),
  removeItem: (id) => {
    set((prevS) => ({
      ...prevS,
      data: prevS.data.filter((i) => i.id !== id),
    }));
  },
}));

export const useModel = create((set) => ({
  open: false,
  setOpen: () => set((ps) => ({ open: !ps.open })),
}));
