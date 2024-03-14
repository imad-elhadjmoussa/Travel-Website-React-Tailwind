import React from 'react'
import { Hero } from './Hero'
import { PopularDestination } from './PopularDestination'
import { RecentsTrips } from './RecentsTrips'

export const Home = () => {
    return (
        <div >
            <Hero/>
            <PopularDestination/>
            <RecentsTrips/>
        </div>

    )
}
