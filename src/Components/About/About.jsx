/* eslint-disable no-unused-vars */
import React from 'react'
import SubNav from './SubNav'
import LeisureTime from './LeisureTime'
import Review from './Review'
import Sponsors from './Sponsors'
import Staff from '../Staff'
import TeacherStaff from './TeacherStaff'
const About = () => {
  return (
    <div>
        <SubNav>
          About Us
        </SubNav>
        <LeisureTime/>
        <Review/>
        <TeacherStaff/>
        {/* <Staff/> */}
        <Sponsors/>
    </div>
  )
}

export default About