import React from 'react'
import DataTable from 'react-data-table-component'
import { CustomStylesTable } from '../styles/CustomStylesTable'

export const TableCustom = ({ data, maxColaboradores, handleVerMasClick, totalColaboradores, columns }) => {
    return (
        <>
            <DataTable
                columns={columns}
                customStyles={CustomStylesTable}
                fixedHeader
                paginationComponentOptions={{
                    rowsPerPageText: 'Ver más',
                    noRowsPerPage: true,
                }}
                data={data}
                selectableRows
                className='2xl:border 2xl:border-t-0 border-t-0 2xl:border-l-black border  border-l-[2px] border-l-gray-500'
            />

            {totalColaboradores.length > maxColaboradores ? (
                <span
                    className='sticky flex flex-col items-center 2xl:border 2xl:border-t-0  border border-t text-center underline hover:cursor-pointer py-2 font-semibold text-[0.9rem]'
                    onClick={handleVerMasClick}
                >
                    Ver más
                </span>
            ) : (
                <span className='sticky flex flex-col items-center text-center 2xl:border 2xl:border-t-0 border border-t py-2 font-semibold text-[0.9rem]'>
                    No hay más registros
                </span>
            )

            }
            <div className='flex flex-col'>
                <span className='text-end pt-3 font-semibold text-[0.9rem]'>
                    {data.length} de 899
                </span>
            </div>
        </>
    )
}