/* eslint-disable no-unused-vars */
import React from 'react'
import RecentBlog from './RecentBlog'
import HeadingWithStar from './HeadingWithStar'

const MainBlogs = () => {
  const Arr={
    bg:"https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/title_bg_white.png",
    text:"#FFFFFF"

  }
  return (
    <div className="lg:h-[110vh] w-full  flex items-center justify-center flex-col bg-black bg-[url('https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/fullwidth-blog-bg.png')] bg-fixed font-lato  " >
      <div className='h-full md:w-full  pt-20 flex items-center justify-center flex-col gap-2' > 
      <HeadingWithStar bg={Arr} > Recent Blogs</HeadingWithStar>
      <RecentBlog/>
      </div>
    </div>
  )
}

export default MainBlogs