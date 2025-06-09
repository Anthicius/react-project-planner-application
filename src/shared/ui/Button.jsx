import React from 'react'

const Button = ({children, style}) => {
  return (
    <button class={style}>{children}</button>
  )
}

export default Button