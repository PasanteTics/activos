import React from 'react'

export const CustomButton = ({
  title = '',
  action = () => false,
  children=<></>,
  disabledBtn = false,
  titulo = '',
  moreStyle = '',
}) => {

  return (
    <button
      onClick={action}
      title={titulo}
      className={` py-1 px-1.5 ${moreStyle} ${disabledBtn ? 'hover:cursor-default text-gray-300' : 'hover:cursor-pointer text-black'}`}
      disabled={disabledBtn}
    >
      {title}
      {children}
    </button>
  )
}