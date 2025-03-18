import React from 'react'

export const CustomSelect = ({ data, titleData, styles }) => {

    /**
     * Recordar manejar el estado de select con mayor precisión
     * para que se pueda enviar la información correctamente.
     */

    return (
        <>
            <label className=' text-black font-semibold mb-1'>{titleData}</label>
            <select className={`border h-7.5 border-black ${styles}`}>
                <option value=''>Selecciona una opción</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </>

    )
}