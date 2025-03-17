import React from 'react'
import { DropdownButton } from './CustomButtonDropdown'

export const DirectionsTail = () => {
  return (
    <>
      <DropdownButton
        title='ActivA'
        options={[
          { label: 'Activos fijo' },
          { label: 'Baja de activos' },
          { label: 'Salida de activos' },
          { label: 'Reportes' },
          { label: 'Extracciones' }
        ]}
        onSelect={(opt) => console.log(opt)}
        disabledBtn={false}
        children={<></>}
        style=' border 2xl:mt-3 right-0 md:mt-2.5  transform -translate-x-15'
      />
      <DropdownButton
        title='OpinA'
        options={[
          { label: 'Encuestas' },
          { label: 'Categorias' },
        ]}
        onSelect={(opt) => console.log(opt)}
        disabledBtn={false}
        style=' border 2xl:mt-3 right-0 md:mt-2.5 transform -translate-x-15'
      />
      <DropdownButton
        title='TurnA'
        options={[
          { label: 'Turnos' },
          { label: 'Dispensador' },
        ]}
        onSelect={(opt) => console.log(opt)}
        disabledBtn={false}
        children={<></>}
        style=' border 2xl:mt-3 right-0 md:mt-2.5  transform -translate-x-15'
      />
    </>
  )
}