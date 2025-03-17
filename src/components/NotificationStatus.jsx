import React from 'react'

export const NotificationStatus = ({ colaborators, actionButton, ref }) => {

    return (
        <div className='absolute z-10 bg-white border 2xl:w-[300px] w-60 2xl:top-16 2xl:-right-8 top-16 right-0 text-sm text-start' ref={ref}>
            {
                colaborators.map((colaborador, index) => (
                    <>
                        {
                            colaborador.state === false && (<div key={index} className='px-4 py-2 border-b border-gray-300 hover:cursor-pointer' onClick={actionButton}>
                                <p className='m-0'>{colaborador.name} {colaborador.action} {colaborador.asset}.</p>
                                <span className='block text-xs text-gray-500'>{colaborador.date}</span>
                            </div>)
                        }
                    </>
                ))
            }
        </div>
    )
}