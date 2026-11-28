// not final
import { create } from "zustand";

const useUIStore = create((set) => ({
  sidebarOpen: true,
  modalOpen: false,

  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  setSidebarOpen: (value) => set({ sidebarOpen: value }),

  openModal: () => set({ modalOpen: true }),

  closeModal: () => set({ modalOpen: false }),
}));

export default useUIStore;
