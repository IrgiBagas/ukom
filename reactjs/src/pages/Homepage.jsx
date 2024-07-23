import React from 'react'
import HeaderSection from '../components/Layout/HeaderSection'
import HeroSectionOne from '../components/HomePage/HeroSectionOne'
import AdventureSection from '../components/HomePage/AdventureSection'
import WorkSection from '../components/HomePage/WorkSection'
// import FooterSection from '../components/Layout/FooterSection'
import FeaturedSection from '../components/HomePage/FeaturedSection'
import PlaceSection from '../components/HomePage/PlaceSection'
import HeroSectionTwo from '../components/HomePage/HeroSectionTwo'
import CategorySection from '../components/HomePage/CategorySection'
import FooterSection from '../components/Layout/FooterSection'

const Homepage = () => {
  return (
    <div>
        <HeaderSection/>
        <HeroSectionOne/>
        <AdventureSection/>
        <WorkSection/>
        <FeaturedSection/>
        <PlaceSection/>
        <HeroSectionTwo/>
        <CategorySection/>
        <FooterSection/>

    </div>
  )
}

export default Homepage