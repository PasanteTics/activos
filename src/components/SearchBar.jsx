import { FilterIcon, SearchIcon } from '../icons/TablerIcons'
import { CustomButton } from './CustomButton'
import { DropdownButton } from './CustomButtonDropdown'

export const SearchBar = () => {
    return (
        <div className=' flex relative border-none mt-0 px-2.5 justify-start pb-3 sm:border-b-[1px] sm:border-black'>
            <div className='relative w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto md:absolute md:right-0 md:py-2.5 lg:absolute lg:right-0 xl:absolute xl:right-0 2xl:absolute 2xl:right-0 '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3 top-1.5 hover:cursor-pointer'>
                    <SearchIcon />
                </span>
                <div className='flex mt-1.5 w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto'
                    style={{ flexShrink: '0' }}
                >
                    <input
                        type='search'
                        placeholder=' Buscar...'
                        className='h-8 pl-8 w-full md:w-[290px] lg:w-[290px] xl:w-[290px] 2xl:w-auto border font-extralight px-2 ml-2'
                    />

                    <DropdownButton
                        children={<FilterIcon />}
                        titulo='Filtrar activos'
                        options={[
                            { label: 'Filtrar por estado' },
                            { label: 'Filtrar por categoría' },
                            { label: 'Filtrar por ubicación' },
                            { label: 'Filtrar por responsable' },
                        ]}
                        onSelect={(opt) => console.log(opt)}
                        disabledBtn={false}
                        style='absolute z-10 mt-0.5 bg-white shadow-2xl border 2xl:border-r-0 2xl:mt-3 right-0 md:mt-2.5 md:border-r md:border-t-0 md:-translate-x-36.5 transform 2xl:-translate-x-37 border-r-0 -translate-x-34.5'
                    />
                </div>
            </div>
        </div>
    )
}