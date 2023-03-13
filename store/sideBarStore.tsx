import create from "zustand";

interface SideBarState {
  sideBarOpen: boolean;
  setSideBarOpen: (isOpen: boolean) => void;
}
const useSideBarStore = create<SideBarState>((set) => ({
  sideBarOpen: true,
  setSideBarOpen: (isOpen: boolean) => {
    localStorage.setItem("sidebar-state", isOpen.toString());
    set((state) => ({
      ...state,
      sideBarOpen: isOpen,
    }));
  },
}));

export default useSideBarStore;
