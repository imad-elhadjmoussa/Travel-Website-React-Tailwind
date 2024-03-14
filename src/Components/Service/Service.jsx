import React from 'react'
import serviceBg from './../../Images/1.jpg'
import { RecentsTrips } from '../Home/RecentsTrips'

export const Service = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${serviceBg})` }}
                className='bg-center bg-cover bg-no-repeat w-[100vw] h-[70vh] flex items-center justify-center'
            >
                <h1 className='text-5xl font-bold text-white'>
                    Service
                </h1>
            </div>
            <RecentsTrips/>
        </div>
    )
}
