import { create } from 'zustand';

export const useLoaderStore = create((set) => ({
    isLoading: false,
    startLoading: () => ({ set: set({ isLoading: true }) }),
    stopLoading: () => ({ set: set({ isLoading: false }) })
}))