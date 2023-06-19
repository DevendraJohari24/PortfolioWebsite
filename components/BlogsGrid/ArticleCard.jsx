import React from 'react'

const ArticleCard = ({title, date, image, link}) => {
  return (
    <div className="w-full h-full space-y-2">
    {/*  Image */}
   <a href={link}>
   <div className="md:h-48 h-32">
        <img src={image} alt='' className='w-full h-full object-cover' />
    </div>
    <div className='space-y-1'>
        {/* Date */}
        <p className='md:text-xs text-[12px] uppercase text-slate'>{date}</p>
        <p className='md:text-sm text-xs'>{title}</p>
    </div>
   </a>
</div>

  )
}

export default ArticleCard