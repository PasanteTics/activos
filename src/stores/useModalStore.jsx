import { create } from 'zustand';

export const useModalStore = create((set) => ({
    isOpen: false,
    openModal: () => ({set: set({isOpen: true})}),
    closeModal: () => ({set: set({isOpen: false})}),
    content: <></>,
    setContent: (content) => ({set: set({content, isOpen: true})})
}))