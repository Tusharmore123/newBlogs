import {React,useId,forwardRef} from 'react'

function Select({
    className='',
    options,
    label,
    ...props
},ref) {
    const id=useId();
  return (
    <>
    {label && <label className='' htmlFor={id}>{label}</label>}
    <select
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            >
        {
        options?options.map((option)=>(
            <option className='' key={option} value={option}>
                {option}
                
            </option>
        )):null
        }
    </select>
    </>
  )
}

export default forwardRef(Select)