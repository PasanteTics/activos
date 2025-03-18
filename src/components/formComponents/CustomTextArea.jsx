import React from 'react'

export const CustomTextArea = ({ title, value, styles, stylesLabel }) => (
    <>
        <label className={`text-sm font-bold  text-black ${stylesLabel}`}>{title}</label>
        <textarea
            rows={5}
            value={value}
            style={{ resize: 'none' }}
            className={`border border-black ${styles}`}
        />
    </>
)