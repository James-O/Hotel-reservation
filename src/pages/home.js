import React from 'react'
import PauseOnHover from '../components/slider'
import Main from '../components/home/main'
import Security from '../components/home/security'
import Tours from '../components/home/tours'
import Summary from '../components/home/summary'

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
    </div>
  )
}

export default Home