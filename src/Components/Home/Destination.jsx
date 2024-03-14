import React from 'react'

//h-[350px] w-[205px] rounded-lg sm:w-[450px] md:w-[800px]

export const Destination = ({images,textHead,textContent,id}) => {


    


    return (
        <div className='flex flex-col gap-7 md:flex-row  justify-center items-center '>
            <div className='flex gap-3 w-[100%]  '>
                {
                    images.map((img,index)=>{
                        return (
                            <div key={index} className='w-[100%] ' style={index === 1 ? {paddingTop:'50px'}:{paddingBottom:'50px'}} >
                                <img src={img} alt='' className=' cursor-pointer h-[300px] w-[100%] rounded-lg' />
                            </div>
                        )
                    })
                }
            </div>
            <div className=' flex flex-col gap-5  md:max-w-[300px] lg:max-w-[500px] xl:max-w-[500px]  justify-center'>
                <h2 className='text-2xl font-bold text-center md:text-start text-dark1'>
                    {textHead}
                </h2>
                <p className='text-center text-dark2 md:text-start'>
                    {textContent}
                </p>
            </div>
        </div>
    )
}
