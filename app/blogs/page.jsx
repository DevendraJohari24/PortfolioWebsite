import React from 'react'
import BlogsGrid from '@components/BlogsGrid/BlogsGrid'

const Blogs = () => {
  return (
    <>
    <section id='blogs' className="md:h-fit">
             {/* Title */}
           <div className='space-y-5'>
            <h3 className='text-orange uppercase'>Blogs</h3>
                <div className='space-y-5'>
                    <h1 className='md:text-3xl text-2xl'><span className="underline decoration-slate decoration-1 underline-offset-[20px]">Latest </span> Articles</h1>
                {/* Blogs */}
                <div className=''>
                    <BlogsGrid />
                </div>
                </div>
           </div>

        </section>
    </>
  )
}

export default Blogs