import React from 'react'

export const HeaderSection = ({title,content}) => {
    return (
        <div>
            <div className='px-4 py-16 flex flex-col gap-4 text-dark1'>
                <h1 className='text-4xl text-center  font-bold'>
                    {title}
                </h1>
                <p className='text-center text-dark2'>
                    {content}
                </p>
            </div>
        </div>
    )
}
