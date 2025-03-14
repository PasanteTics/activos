import React from 'react';
import { useListActiva } from '../hooks/useListActivA';
import { columns } from '../helpers/columsTableActivos';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { HeaderActions } from '../components/HeaderActions';
import { TableCustom } from '../components/TableCustom';

export const ActivosPage = () => {
    const { validColaboradores, validateCheck, handleVerMasClick, limitedColaboradores, maxColaboradores } = useListActiva();

    return (
        <div className='w-full h-full mt-4 px-5 mb-5'>
            <BreadCrumbs />
            <HeaderActions validateCheck={validateCheck} />
            <TableCustom data={limitedColaboradores} handleVerMasClick={handleVerMasClick} maxColaboradores={maxColaboradores} totalColaboradores={validColaboradores} columns={columns} />
        </div>
    );
}
