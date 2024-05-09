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
      
    <select {...props}>
    {
        options?options.map((option)=>(
            <option className=' ' key={option} value={option}>
              
                {option}
            </option>
        )):null
    }    
    </select>
    </>
  )
}

export default forwardRef(Select)