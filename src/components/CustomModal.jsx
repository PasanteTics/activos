import React from 'react'
import { useModalStore } from '../stores/useModalStore'

export const CustomModal = () => {

    const { isOpen, content, closeModal } = useModalStore()

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 backdrop-blur-[3px] bg-black/30 z-30 flex justify-center items-center'>
            <div className='relative bg-white p-2 2xl:h-auto h-10/12 overflow-auto'>
                <button onClick={closeModal} className='absolute right-4 top-4 text-2xl text-black hover:cursor-pointer'>&times;</button>
                <div className='p-4'>
                    {content}
                </div>
            </div>
        </div>
    )
}