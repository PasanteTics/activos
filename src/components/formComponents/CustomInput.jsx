import React from 'react'

export const CustomInput = ({ title, type, stylesInput, placeHolder, labelStyle, showLabel = true, value, ...props }) => {
    return (
        <>
            {
                showLabel && <label className={`${labelStyle}`}>{title}</label>
            }
            <input 
                type={type} 
                className={`border h-7.5 ${stylesInput}`} 
                placeholder={placeHolder} 
                {...props} 
            />
        </>
    )
}