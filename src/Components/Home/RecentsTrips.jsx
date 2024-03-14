import React from 'react'
import { HeaderSection } from './HeaderSection'
import img3 from './../../Images/5.jpg'
import img4 from './../../Images/8.jpg'
import img5 from './../../Images/6.jpg'
import { Trip } from './Trip'

const recentsTrips = [
    {
        id: 1,
        img: img3,
        textHead: "Trip in Indonesia",
        textContent: `Indonesia, officially the Republic of
        Indonesia, is a country in Southeast Asia
        and Oceania between the Indian and
        Pacific oceans. It consists of over 17,000
        islands, including Sumatra, Java, Sulawesi,
        and parts of Borneo and New Guinea.
        `,
    },
    {
        id: 1,
        img: img4,
        textHead: "Trip in Malaysia",
        textContent: `Malaysia is a Southeast Asian country
        occupying parts of the Malay Peninsula
        and the island of Borneo. It's known for its
        beaches, rainforests and mix of Malay,
        Chinese, Indian and European cultural
        influences.`,
    },
    {
        id: 1,
        img: img5,
        textHead: "Trip in Indonesia",
        textContent: `Indonesia, officially the Republic of
        Indonesia, is a country in Southeast Asia
        and Oceania between the Indian and
        Pacific oceans. It consists of over 17,000
        islands, including Sumatra, Java, Sulawesi,
        and parts of Borneo and New Guinea.
        `,
    },
]


export const RecentsTrips = () => {
    return (
        <div className='px-10'>

            <HeaderSection
                title='Recents Trips'
                content='You can discover unique destinations using Googlr Maps'
            />

            <div className=' grid gap-10 items-center justify-center sm:grid-cols-2 md:grid-cols-3 sm:px-8'>
                {
                    recentsTrips.map(ele => {
                        return (
                            <Trip
                                key={ele.id}
                                trip={ele}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}
