import React from 'react'
import PauseOnHover from '../components/slider'
import Main from '../components/home/main'
import Security from '../components/home/security'
import Tours from '../components/home/tours'
import Summary from '../components/home/summary'
import Posts from '../components/home/posts'
import SliderTwo from '../components/sliderTwo'
import Question from '../components/home/question'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <div>
        <Main/>
      </div>
      <div>
        <Security/>
      </div>
      <PauseOnHover/>
      <Tours/>
      <Summary/>
      <Posts/>
      <SliderTwo/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default Home