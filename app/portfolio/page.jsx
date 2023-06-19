import React from 'react'
import Carousel from '@components/PortfolioCarousel/Carousel';


const Portfolio = () => {
  return (
    <>
    <section id='portfolio' className='md:h-fit'>
            <div className='space-y-5'>
            <h3 className='text-orange uppercase'>Portfolio</h3>
                
                <div className='space-y-5'>
                    <h1 className='md:text-3xl text-2xl'><span className="underline decoration-slate underline-offset-[12px] decoration-1">Featured </span> Projects</h1>
                    <div className="">
                        <Carousel />
                    </div>
                </div>
            </div>

    </section>
    </>
  )
}

export default Portfolio