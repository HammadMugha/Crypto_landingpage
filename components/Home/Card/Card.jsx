import React from 'react'

export default function Card({item}) {
  return (
    <div className='p-5 text-center'>
        <img src={item.img} className='mx-auto'/>
        <h2 className='text-white text-[20px] font-bold my-4'>{item.title}</h2>
        <p className='text-[#B4B6BD] text-[15px]' >{item.para}</p>
    </div>
  )
}
