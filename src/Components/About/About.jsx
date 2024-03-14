import React from 'react'
import aboutBg from './../../Images/night.jpg'
import { sectionInfo } from './data'
import { AboutSection } from './AboutSection'

export const About = () => {
    return (
        <div>

            <div
                style={{ backgroundImage: `url(${aboutBg})` }}
                className='bg-center bg-cover bg-no-repeat w-[100vw] h-[70vh] flex items-center justify-center'
            >
                <h1 className='text-5xl font-bold text-white'>
                    About
                </h1>
            </div>

            <div className='flex flex-col gap-10 pt-10'>
                {
                    sectionInfo.map(ele => {
                        return (
                            <AboutSection key={ele.id} title={ele.title} content={ele.content}  />
                        );
                    })
                }
            </div>
        </div>
    )
}
