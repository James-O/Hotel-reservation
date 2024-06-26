import React from 'react'
import PauseOnHover from '../components/slider'
import Main from '../components/home/main'
import Security from '../components/home/security'
import Tours from '../components/home/tours'
import Summary from '../components/home/summary'
import Posts from '../components/home/posts'

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
    </div>
  )
}

export default Home