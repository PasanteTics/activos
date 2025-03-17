import { useEffect, useRef, useState } from 'react'
import { Notification, ExitIcon } from '../icons/TablerIcons'
import { CustomButton } from './CustomButton'
import { DirectionsTail } from './DirectionsTail'
import { NotificationStatus } from './NotificationStatus'
import logoCamara from '../assets/img/logoCamara.png'
import { useNotification } from '../hooks/useNotification'

/**
 * Componente HeaderCustom
 * 
 * Este componente representa un encabezado personalizado que incluye un menú desplegable de notificaciones y un botón para cerrar sesión.
 * 
 * @component
 * @returns {JSX.Element} El componente HeaderCustom.
 * 
 * @example
 * // Uso del componente HeaderCustom
 * <HeaderCustom />
 * 
 * @description
 * El componente utiliza los siguientes hooks y referencias:
 * - `useState`: Para manejar el estado de visibilidad del menú desplegable.
 * - `useRef`: Para referenciar el botón de notificaciones y el menú desplegable.
 * - `useNotification`: Para obtener los colaboradores que se mostrarán en el menú de notificaciones.
 * - `useEffect`: Para manejar los clics fuera del menú desplegable y cerrar el menú si está abierto.
 * 
 * @property {boolean} showDropdown - Estado que indica si el menú desplegable está visible.
 * @property {function} setShowDropdown - Función para actualizar el estado de `showDropdown`.
 * @property {object} dropMenuRef - Referencia al menú desplegable.
 * @property {object} notificationBtnRef - Referencia al botón de notificaciones.
 * @property {object} colaborators - Colaboradores obtenidos del hook `useNotification`.
 * 
 * @function toggleDropdown - Función para alternar la visibilidad del menú desplegable.
 * @function handleClickOutside - Función para manejar los clics fuera del menú desplegable y cerrarlo si está abierto.
 */
export const HeaderCustom = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropMenuRef = useRef(null);
  const notificationBtnRef = useRef(null);
  const { colaborators } = useNotification();

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDropdown &&
        dropMenuRef.current &&
        !dropMenuRef.current.contains(event.target) &&
        notificationBtnRef.current &&
        !notificationBtnRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, [showDropdown]);

  return (
    <div className='2xl:flex 2xl:justify-between 2xl:relative 2xl:items-center 2xl:border 2xl:border-t-0 2xl:p-4 2xl:w-screen 2xl:flex-row flex flex-col'>
      <nav className='2xl:flex 2xl:items-start 2xl:self-start 2xl:justify-around 2xl:w-auto w-auto items-center justify-center text-center'>
        <div className='flex justify-between'>
          <img src={logoCamara} className='w-auto h-13 mt-2 self-start ml-2' alt='Logo' />
          <div className='2xl:flex 2xl:items-center 2xl:self-end 2xl:absolute 2xl:right-4 2xl:top-7.5 flex gap-4 mr-4'>
            <div ref={notificationBtnRef}>
              <CustomButton
                action={toggleDropdown}
                children={<Notification />}
                titulo='Notificaciones'
                moreStyle='2xl:mt-0.5 xl:mt-3.5 md:mt-3.5 mt-3.5'
              />
            </div>
            <CustomButton
              action={() => console.log('click')}
              children={<ExitIcon />}
              titulo='Cerrar sesión'
              moreStyle='-mt-0.5'
            />
              {showDropdown && (
              <NotificationStatus colaborators={colaborators} ref={dropMenuRef} />
            )}
          </div>
          
        </div>
        <div className='2xl:flex 2xl:gap-10 2xl:ml-20 2xl:border-0 flex 2xl:mt-3.5 mt-2.5 gap-10 justify-center border-t border-b border-gray-300 py-2'>
          <DirectionsTail />
        </div>
      </nav>
    </div>
  )
}