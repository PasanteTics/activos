import React from 'react'

/**
 * Componente DeleteActionForm
 * 
 * Este componente muestra un formulario de confirmación para eliminar una acción.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.action - Función que se ejecuta al hacer clic en el botón "Aceptar".
 * @param {string} props.bodyText - Texto que se muestra en el cuerpo del formulario.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el formulario de eliminación.
 */
export const DeleteActionForm = ({ action, bodyText }) => {

  return (
    <div className='flex flex-col 2xl:w-[440px] 2xl:my-2 md:w-[440px] md:my-2 p-4 2xl:text-md text-sm '>
      <h1 className='text-lg self-start text-start font-bold text-black mb-2'>¡Atención!</h1>
      <p className='text-md font-medium text-black mb-5 '>{bodyText}</p>
      <div className='flex justify-end items-center self-end'>
        <button className='border font-semibold text-black px-4 h-8 m-auto hover:cursor-pointer text-sm' onClick={action}>Aceptar</button>
      </div>
    </div>
  )
}