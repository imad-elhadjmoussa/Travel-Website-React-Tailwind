import React from 'react'
import heroBg from './../Images/12.jpg'

export const Home = () => {
    return (
        <div >
            <div
                style={{ backgroundImage: `url(${heroBg})` }}
                className='h-screen flex flex-col gap-7 justify-center items-center bg-slate-400 bg-cover md:bg-no-repeat md:bg-center'
            >
                <h1 className='text-5xl text-center font-bold text-white'>
                    Your Journey Your Story
                </h1>
                <p className='text-lg md:text-2xl  text-white'>
                    Choose Your Favourit Destination
                </p>
                <button className='py-2 font-bold px-7 text-lg bg-white rounded-lg cursor-pointer hover:shadow-xl transition duration-150 ease-linear'>
                    Travel Plan
                </button>
            </div>
            <div className='px-2 py-7 flex flex-col gap-3 text-dark1'>
                <h1 className='text-4xl text-center  font-bold'>
                    Populer Destinations
                </h1>
                <p className='text-center text-dark2'>
                    Tours give you theopportunity to see a lot, withn a time frame.
                </p>
            </div>
        </div>

    )
}
