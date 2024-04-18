import React from 'react'

function Container({children}) {
  return (
    <div className='w-full flex mx-auto max-w-7xl'>{children}</div>
  )
}   

export default Container