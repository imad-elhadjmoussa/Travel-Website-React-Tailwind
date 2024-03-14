import React from 'react'
import { Destination } from './Destination'
import img1 from './../../Images/1.jpg'
import img2 from './../../Images/2.jpg'
import img3 from './../../Images/5.jpg'
import img4 from './../../Images/8.jpg'



import { HeaderSection } from './HeaderSection'

const popularDestinationInfo = [
    {
        id: 1,
        images: [img1, img2],
        textHead: 'Taal Volcano, Batangas',
        textContent: `One of the most iconic views in Luzon, Mt.Taal boasts a
        volcano inside a lake inside an island. If you fancy a closer
        look, the hike up to the crater is a mere 45 minutes, and is
        easy enough for beginners. Guides will assist you most of
        the way, and you'll see the peculiar environment found on
        an active volcano, including volcanic rocks and steam
        vents. The hike can be dusty and hot, so plan for an early
        morning trip, and then unwind with some bulalo before
        heading back home!`
    },
    {
        id: 2,
        images: [img3, img4],
        textHead: 'Mt. Daguldul, Batangas',
        textContent: `If you're looking for a hike that's a little more challenging
        but still good for a beginner mountaineer, check out Mt.
        Daguldul in San Juan, Batangas. You'll start your hike from
        the beach and pass through tropical forest, different rock
        formations, and small streams. There's a small store
        halfway up the trail where you can take a break and drink
        buko juice, and though the summit itself may not have the
        best view, the breeze is fantastic. Once you've made it
        back down, head straight to the beach for a refreshing,
        well-deserved swim.`
    }
]



export const PopularDestination = () => {


    return (
        <div className='px-10'>
            <HeaderSection
                title='Populer Destinations'
                content='Tours give you theopportunity to see a lot, withn a time frame.'
            />

            <div className='flex sm:px-14 md:px-10 flex-col gap-20'>
                {
                    popularDestinationInfo.map(ele => {
                        return (
                            <Destination
                                key={ele.id}
                                id={ele.id}
                                images={ele.images}
                                textContent={ele.textContent}
                                textHead={ele.textHead}
                            />)
                    })
                }
            </div>

        </div>

    )
}
