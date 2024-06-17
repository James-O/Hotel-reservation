import React from 'react'
import PauseOnHover from '../components/slider'
import Main from '../components/home/main'
import Security from '../components/home/security'

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
    </div>
  )
}

export default Home