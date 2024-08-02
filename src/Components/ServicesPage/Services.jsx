/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceNav from './ServiceNav'
import ServiceAccordianPage from './ServiceAccordianPage'
import Parallax from '../Parallax'
import UpcomingEventSection from './UpcomingEventSection'
import Review from '../About/Review'

const Services = () => {
  return (
    <div className='' >
      <ServiceNav/>
       <ServiceAccordianPage/>
        <Parallax/>
        <UpcomingEventSection/>
        <Review/>
    </div>
  )
}

export default Services