import React from 'react'

function Button({
    children,
    type,
    className='',
    bgColor='bg-lime-500',
    textColor='text-amber-600',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
    type={type}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button