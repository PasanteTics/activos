import React, { useState, useRef, useEffect } from 'react';
import { CustomButton } from './CustomButton';

export const DropdownButton = ({
    title = '',
    options = [],
    onSelect = () => { },
    disabledBtn = false,
    children
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cerrar el dropdown cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <CustomButton
                children={children}
                title={title}
                action={() => setIsOpen(!isOpen)}
                disabledBtn={disabledBtn}
            />
            {isOpen && (
                <div className="absolute z-40 2xl:-ml-2 mt-0.5 bg-white shadow-2xl border 2xl:border-l-0 -ml-1.5 min-w-[180px]">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 text-sm text-black font-medium hover:bg-gray-100 hover:underline cursor-pointer"
                            onClick={() => {
                                onSelect(option);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};