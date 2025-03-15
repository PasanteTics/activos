import React, { useState, useRef, useEffect } from 'react';
import { CustomButton } from './CustomButton';

/**
 * Componente DropdownButton que representa un botón con un menú desplegable.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.title=''] - Título del botón.
 * @param {Array} [props.options=[]] - Opciones del menú desplegable.
 * @param {Function} [props.onSelect=() => {}] - Función que se ejecuta al seleccionar una opción.
 * @param {boolean} [props.disabledBtn=false] - Indica si el botón está deshabilitado.
 * @param {React.ReactNode} props.children - Elementos hijos que se renderizan dentro del botón.
 * @param {string} [props.style=''] - Estilo adicional para el menú desplegable.
 *
 * @returns {JSX.Element} Componente DropdownButton.
 */

export const DropdownButton = ({
    title = '',
    options = [],
    onSelect = () => { },
    disabledBtn = false,
    children,
    style = '',
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

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

    // Calcular la posición del botón y ajustar la dirección del dropdown
    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            setOpenLeft(rect.right > viewportWidth / 2);
        }
    }, [isOpen]);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <CustomButton
                ref={buttonRef}
                children={children}
                title={title}
                action={() => setIsOpen(!isOpen)}
                disabledBtn={disabledBtn}
            />
            {isOpen && (
                <div className={`absolute z-10 2xl:mt-0.5 bg-white shadow-2xl border ${openLeft ? 'right-0 transform -translate-x-full' : `left-0 2xl:mt-2.5 -ml-2 ${style}`}`} style={{ minWidth: '12rem' }}>
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