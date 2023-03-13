import { ColorScheme } from "@mantine/core";
import create from "zustand";

interface ThemeState {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
}
const useThemeStore = create<ThemeState>((set) => ({
  sideBarOpen: true,
  setSideBarOpen: (isOpen: boolean) =>
    set((state) => ({
      ...state,
      sideBarOpen: isOpen,
    })),
  colorScheme: "dark",
  setColorScheme: (color) =>
    set((state) => ({
      ...state,
      colorScheme: color,
    })),
}));

export default useThemeStore;
