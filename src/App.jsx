/* eslint-disable no-unused-vars */
import React from 'react'
import SimpleSlider from './Components/SimpleSlider'
import Services from './Components/Services'
import Parallax from './Components/Parallax'
import PortfolioPage from './Components/PortfolioPage'
import MainBlogs from './Components/MainBlogs'
import Staff from './Components/Staff'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
       <SimpleSlider/>
       <Services/>
       <Parallax/>
       <PortfolioPage/>
       <MainBlogs/>
       <Staff/>
       <Products/>
    </div>
  )
}

export default App
