import React from 'react'
import BAAraa from './BAAraa'
import Banner from './Banner'
import Craving from './Craving'
import DontMiss from './DontMiss'
import ExploreMore from './ExploreMore'
import FanFavs from './FanFavs'
import Footer from './Footer'
import FooterText from './FooterText'
import MoreIdeas from './MoreIdeas'
import Nav from './Nav'
import Reviews from './Reviews'
import Search from './Search'
import Special from './Special'
import Trending from './Trending'

function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <BAAraa/>
            <Reviews/>
            <Craving/>
            <ExploreMore/>
            <Trending/>
            <DontMiss/>
            <MoreIdeas/>
            <Special/>
            <FanFavs/>
            <Search/>
            <FooterText/>
        </div>
    )
}

export default Home