import React from 'react'
import { CustomButton } from '../CustomButton'
import { CustomTextArea } from '../formComponents/CustomTextArea'
import { CustomInput } from '../formComponents/CustomInput'
import { CustomSelect } from '../formComponents/CustomSelect'
import { CustomInputFile } from '../formComponents/CustomInputFile'

export const FormCreateActivo = () => {

    const Colaboradores = [{
        id: 1,
        name: 'Juan Estevan'
    }, {
        id: 2,
        name: 'Martha Hoyos'
    }, {
        id: 3,
        name: 'Cristian Restrepo Cardozo'
    }]

    const Categorias = [{
        id: 1,
        name: 'Computadores'
    }, {
        id: 2,
        name: 'Mesas y enseres'
    }, {
        id: 3,
        name: 'Escaner e impresoras'
    }
    ]

    return (
        <form className='flex flex-col 2xl:justify-center 2xl:m-auto 2xl:w-auto 2xl:h-auto md:w-auto 2xl:text-start 2xl:overflow-auto 2xl:px-4 2xl:pb-4 gap-y-3 bg-white overflow-auto w-[320px]  text-sm justify-center px-4 py-4'>
            <CustomTextArea title={'Descripción'} stylesLabel={'font-semibold'} />
            <div className='2xl:flex 2xl:flex-row 2xl:justify-between md:flex  md:gap-x-8 md:flex-row flex flex-col gap-x-3 gap-y-3  '>
                <div className='flex flex-col'>
                    <CustomSelect data={Colaboradores} titleData={'Colaborador'} styles={'2xl:w-[182px] md:w-[182px] px-2'} />
                </div>
                <div className='flex flex-col '>
                    <CustomSelect data={Categorias} titleData={'Categoría'} styles={'2xl:w-[182px] md:w-[182px] px-2'} />
                </div>
            </div>

            <CustomInput title={'Ubicación'} labelStyle={' font-semibold -mb-2'} />
            <CustomInput title={'Cantidad'} labelStyle={'font-semibold -mb-2'} />
            <CustomTextArea title={'Observación'} stylesLabel={'-mb-2 font-semibold'} />

            <div className='2xl:flex 2xl:flex-row md:flex md:flex-row flex flex-col gap-x-4 justify-between'>
                <div className='flex flex-col'>
                    <CustomInput title={'Fecha de compra'} stylesInput={'2xl:w-[182px] md:w-[182px]'} labelStyle={'font-semibold'} />
                </div>
                <div className='flex flex-col '>
                    <CustomInput title={'Valor'} stylesInput={'2xl:w-[182px] md:w-[182px]'} labelStyle={'font-semibold'} />
                </div>
            </div>

            <CustomInputFile />

            <CustomButton
                title='Aceptar'
                moreStyle='self-end border h-7.5 2xl:w-[100px] w-[70px] md:w-[100px] text-sm '
            />
        </form>
    )
}