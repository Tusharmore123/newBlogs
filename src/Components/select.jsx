import React from 'react'
import { forwardRef } from 'react'

function Select({
    options,
    label,
    className='',
    ...props
},ref) {
  return (
    <>
    {label && <label htmlFor='label'>{label}</label>}
      
    <select {...props} className={`${className}`}>
    {
        options?options.map((option)=>(
            <option  key={option} value={option}>
              
                {option}
            </option>
        )):null
    }    
    </select>
    </>
  )
}

export default forwardRef(Select)