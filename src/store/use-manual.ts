import { create } from "zustand";

interface ManualState {
	isManually: boolean;
	setIsManually: (value: boolean) => void;
}

export const useManualStore = create<ManualState>((set) => ({
	isManually: false,
	setIsManually: (value) => set({ isManually: value }),
}));
