import React from 'react'
import { ButtonActions, } from './activA/activos/ButtonActions';
import { SearchBar } from './SearchBar';

export const HeaderActions = ({ validateCheck }) => {

    return (
        <div className='2xlpx-2 text-start pt-2 2xl:pt-0 2xl:pb-2 2xl:pl-2 lg:pt-0 lg:pb-2 border xl:pt-0 xl:pb-2 md:pt-0 md:pb-2 m-auto'>
            <SearchBar />
            <ButtonActions onActiveButtons={validateCheck} />
        </div>
    );
}
