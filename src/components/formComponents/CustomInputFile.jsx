import React, { useState } from 'react';

export const CustomInputFile = ({ fileAccept = '.jpg, .jpeg, .png, .webp', title = 'Seleccionar imagen', multiple = false }) => {
    const [fileName, setFileName] = useState('Sin selección');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('No hay imagen seleccionada');
        }
    };

    return (
        <div className="flex items-center">
            <label className="border p-1 px-2 mt-1 cursor-pointer">
                {title}
                <input
                    className="hidden"
                    multiple
                    id="file_input"
                    accept={fileAccept}
                    type="file"
                    onChange={handleFileChange}
                />
            </label>
            <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">{fileName}</span>
        </div>
    );
};