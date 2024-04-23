import React from 'react'

export default function Heading({title,para}) {
  return (
    <div className='text-center mb-[40px]'>
        <h4 className='mb-4 text-[25px] text-white font-bold'>{title}</h4>
        <h2 className='text-[20px] text-[#B4B6BD]'>{para}</h2>
    </div>
  )
}
