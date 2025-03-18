import { create } from 'zustand';

export const socketStore = create((set) => ({
    online: false,
    socket: null,
    setOnline: (value) => set((state) => ({ ...state, online: value })),
    setSocket: (socket) => set((state) => ({ ...state, socket }))
}));