import { create } from 'zustand';

export const tokenStore = create((set) => ({
    token: sessionStorage.getItem('token'),
    setToken: (token) => set(() => {
        !token ? sessionStorage.removeItem('token') : sessionStorage.setItem('token', token);
        return ({ token });
    })
}));