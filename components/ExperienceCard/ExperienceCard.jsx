import React from 'react'

const ExperienceCard = ({company_title, start_date, end_date, designation, description}) => {
  return (
    <>
    <div className='bg-veryDarkGray w-full flex items-center'>
                {/* Slate Line */}
                <div className='w-0.5 h-14 bg-slate'></div>
                {/* Details */}
                <div className='w-full h-full m-8 space-y-3'>
                    {/* Company Name */}
                    <div className='md:text-lg text-base tracking-wider'>
                        {company_title}&nbsp;<span className="text-slate md:text-base text-sm">  ({start_date} – {end_date})</span>
                    </div>
                    {/* Job Destination */}
                    <div className='md:text-2xl text-xl'>
                        {designation}
                    </div>
                    {/* Description */}
                    <div className=''>
                        <p className='md:text-2sm text-sm text-justify text-slate'>{description}</p>
                    </div>
                </div>
                
            </div>
    </>
  )
}

export default ExperienceCard