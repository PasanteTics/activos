import React from 'react'
import { Link } from 'wouter'
import { Notification, ExitIcon } from '../icons/TablerIcons'
import { CustomButton } from './CustomButton'
import logoCamara from '../assets/img/logoCamara.png'

export const HeaderCustom = () => {

  //IMPLEMENTAR LA SEÑALIZACIÓN DE LA OPCIÓN SELECCIONADA DEPENDIENDO DE LA RUTA EN LA QUE SE ENCUENTRE

  return (
    <div className='2xl:flex 2xl:justify-between 2xl:items-center 2xl:border 2xl:border-t-0 2xl:p-4 2xl:w-screen 2xl:flex-row flex flex-col'>
      <nav className='2xl:flex 2xl:items-start 2xl:self-start 2xl:justify-around 2xl:w-auto w-auto items-center justify-center text-center'>
        <div className='flex justify-between'>
          <img src={logoCamara} className=':w-auto h-13 mt-2 self-start ml-2' />
          <div className='2xl:flex 2xl:items-center 2xl:self-end 2xl:absolute 2xl:right-4 2xl:top-7.5 flex gap-4 mr-4'>
            <CustomButton
              action={() => console.log('click')}
              children={<Notification />}
              titulo='Notificaciones'
            />
            <CustomButton
              action={() => console.log('click')}
              children={<ExitIcon />}
              titulo='Cerrar sesión'
            />
          </div>
        </div>
        <div className='2xl:flex 2xl:gap-10 2xl:ml-20 2xl:border-0 flex 2xl:mt-3.5 mt-2.5 gap-10 justify-center border-t-[1px] 2xl:py-1 py-2 border-b-[1px]'>
          <Link href='/ActivA' className='text-black hover:text-gray-700 focus:underline'>ActivA</Link>
          <Link href='/OpinA' className='text-black hover:text-gray-700 focus:underline'>OpinA</Link>
          <Link href='/TurnA' className='text-black hover:text-gray-700 focus:underline'>TurnA</Link>
        </div>
      </nav>
    </div>
  )
}