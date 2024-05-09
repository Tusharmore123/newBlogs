import React from 'react';
import { useId } from 'react';

const Input=React.forwardRef( function Input({
    label,
    type,
    className,
    ...props
},ref) {
    const id=useId()
  return (
    <>
    {label && <label htmlFor={id}>{label}</label>}
    <input type={type} 

    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    {...props}
    ref={ref}
    id={id}>
    </input>
      </>
  )
})

export default Input