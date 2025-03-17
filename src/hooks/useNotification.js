import React, { useState } from 'react'

export const useNotification = () => {

    const [colaborators, setColaborators] = useState([
        {
            name: 'Santiago Soleibe',
            action: 'autorizó la salida de activos',
            asset: 'SA-002-2025',
            date: '22-03-2025',
            state: false
        },
        {
            name: 'Santiago Soleibe',
            action: 'aprobó la baja de activos',
            asset: 'BA-002-2025',
            date: '12-03-2025',
            state: false
        },
        {
            name: 'Cristian Restrepo',
            action: 'autorizó la salida de activos',
            asset: 'SA-001-2025',
            date: '01-03-2025',
            state: false
        },
        {
            name: 'Valeria Lopez',
            action: 'envió una solicitud para baja de activos',
            asset: 'BA-001-2025',
            date: '27-02-2025',
            state: true

        }
    ])

    const changeStateNotification = (index) => {
        setColaborators(prevState => {
            const newColaborators = [...prevState]
            newColaborators[index].state = 'approved'
            return newColaborators
        })
    }

    return {
        colaborators,
        changeStateNotification
    }
}