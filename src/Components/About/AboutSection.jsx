import React from 'react'

export const AboutSection = ({title,content}) => {
    return (
        <div className='px-10 flex flex-col gap-5 '>
            <h1 className=' text-dark1 font-bold text-4xl'>
                {title}
            </h1>
            <p className=' text-dark2'>
                {content}
            </p>
        </div>
    )
}
