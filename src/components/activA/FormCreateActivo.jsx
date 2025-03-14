import React from 'react'
import { CustomButton } from '../CustomButton'

export const FormCreateActivo = () => {
    return (
        <div className='2xl:flex 2xl:flex-col 2xl:justify-center 2xl:m-auto 2xl:items-center 2xl:w-full 2xl:h-full 2xl:overflow-auto 2xl:mt-4 2xl:px-5 bg-white h-auto w-auto'>
            <form className='2xl:flex 2xl:flex-col 2xl:justify-center 2xl:m-auto  2xl:w-auto 2xl:h-full 2xl:text-start 2xl:overflow-auto 2xl:my-7 2xl:px-5 bg-white flex flex-col overflow-auto w-auto justify-center'>
                <label className='text-md font-bold mb-0.5 text-black'>Descripción</label>
                <textarea
                    cols={20}
                    rows={10}
                    style={{
                        resize: 'none'
                    }}
                    className='2xl:h-28 h-28 border border-black'
                />
                <div className='2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-10 2xl:mb-5 2xl:pt-2 pt-3 flex flex-col'>
                    <div className='flex flex-col'>
                        <label className='2xl:text-md 2xl:font-bold  text-black font-bold mb-1'>Responsable</label>
                        <select className='2xl:w-[210px] border 2xl:h-7.5 border-black'>
                            <option value=''>Selecciona una opción</option>
                            <option value=''>Juan Estevan</option>
                            <option value=''>Cristian Ramiro</option>
                            <option value=''>Ignacio</option>
                        </select>
                    </div>
                    <div className='2xl:flex flex flex-col'>
                        <label className='2xl:mt-0 text-md font-bold mb-1 text-black mt-2'>Categoria</label>
                        <select className='2xl:w-[210px] border h-7.5 border-black '>
                            <option value=''>Selecciona una opción</option>
                            <option value=''>Computo</option>
                            <option value=''>Mobiliario</option>
                            <option value=''>Vehiculo</option>
                        </select>
                    </div>
                </div>
                <label className='2xl:text-md font-bold 2xl:mb-1 2xl:pt-0 text-black pt-3'>Ubicación</label>
                <input type='text' className='2xl:w-full border 2xl:h-7.5  2xl:mb-7' />
                <div className='2xl:flex 2xl:justify-between 2xl:gap-10 2xl:mb-7'>
                    <div className='flex flex-col 2xl:mt-0 mt-2'>
                        <label className='2xl:text-md font-bold 2xl:mb-1 text-black'>Placa</label>
                        <input type='text' className='2xl:w-[210px] border 2xl:h-7.5 border-black' />
                    </div>
                    <div className='flex flex-col 2xl:mt-0 '>
                        <label className=' text-md font-bold mb-1 mt-2 text-black'>Código inteligente</label>
                        <input type='text' className='2xl:w-[210px] border 2xl:h-7.5 border-black' />
                    </div>
                </div>
                <label className='text-md font-bold 2xl:mb-1 text-black'>Observación</label>
                <textarea
                    cols={20}
                    rows={10}
                    style={{
                        resize: 'none'
                    }}
                    className='h-28 2xl:w-full border border-black 2xl:mb-7'
                />
                <div className='2xl:flex 2xl:justify-between 2xl:gap-10 2xl:mb-7'>
                    <div className='2xl:flex 2xl:flex-col'>
                        <label className='text-md font-bold 2xl:mb-1 text-black'>Fecha de compra</label>
                        <input type='date' className='2xl:w-[210px] border 2xl:h-7.5 border-black ' />
                    </div>
                    <div className='2xl:flex 2xl:flex-col'>
                        <label className='text-md font-bold 2xl:mb-1 text-black'>Valor</label>
                        <input type='tel' className='2xl:w-[210px] border 2xl:h-7.5 border-black' />
                    </div>
                </div>
                <div className='2xl:flex 2xl:mb-5'>
                    {/* <CustomButton
                        title='Seleccionar imágen'
                        moreStyle='border w-[170px] h-8 font-semibold text-sm  '
                        action={(e) => e.preventDefault()}
                    /> */}
                    <input type='file' className='border border-black 2xl:w-[132px] 2xl:p-1 2xl:h-8 font-semibold text-sm' />
                    <p className='2xl:mt-1 2xl:ml-2 text-gray-600'>Sin selección</p>
                </div>
                <CustomButton
                    title='Aceptar'
                    moreStyle='self-end border 2xl:w-[100px]'
                />
            </form>
        </div>
    )
}