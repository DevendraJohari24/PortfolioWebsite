import React from 'react';
import ArticleCard from './ArticleCard';
import { Blogs } from '@utils/data';



const BlogsGrid = () => {
  return (
    <div className="space-y-10">
        <div className="grid grid-cols-2 w-full h-full gap-4">
        {Blogs.blogs.map((resource, index) => {
          
            return <ArticleCard key={index} title={resource.title} date={resource.date} image={resource.image} link={resource.link} />
        })}
        </div>
        <button className='w-full border border-darkWhite p-2 uppercase text-darkWhite text-sm'>
            Load More Articles
        </button>
    </div>
  )
}

export default BlogsGrid