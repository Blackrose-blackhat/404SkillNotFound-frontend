import { create } from "zustand";
import { persist } from "zustand/middleware";

type RoastResult = any; // Replace with your actual result type

type RoastStore = {
  result: RoastResult | null;
  setResult: (result: RoastResult) => void;
  clearResult: () => void;
  isPanelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
};

export const useRoastStore = create<RoastStore>()(
  persist(
    (set) => ({
      result: null,
      setResult: (result) => set({ result }),
      clearResult: () => set({ result: null }),
      isPanelOpen: false,
      setPanelOpen: (open) => set({ isPanelOpen: open }),
    }),
    {
      name: "roast-storage", // unique name for localStorage key
      // Optional: only persist specific fields
      // partialize: (state) => ({ result: state.result }),
    }
  )
);
