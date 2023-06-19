import React from 'react'

const Card = ({image, tags, title}) => {
  return (
     <div className="carousel-item flex flex-col gap-4 bg-veryDarkGray">
        <div className="shadow-lg w-full h-32 p-1">
            <img src={image} alt='' className='w-full h-full object-cover' />
        </div>
        <div className="p-2">
            <p className='text-slate text-sm'>{tags}</p>
            <p className='text-xl'>{title}</p>
        </div>
    </div>
  )
}

export default Card