import React from 'react'

export default function Summary() {
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
                <img src='images/mainImage2.PNG'className='w-100 rounded' style={{height:"600px"}} alt='Hotel'/>
            </div>
            <div className='col-md-5 col-sm-12 ms-5'>
                <h1 style={{fontWeight:"bold", fontSize:"50px"}}>We have the best service.</h1>
                <p className='text-black-50 h5 my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='row'>
                    <div className='col-4'>
                        <div className='my-5'>
                            <h2 style={{color:"#4C3BCF"}}>192</h2>
                            <h2>Countries</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#4C3BCF"}}>479</h2>
                            <h2>Hotels</h2>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='my-5'>
                            <h2 style={{color:"#4C3BCF"}}>2093</h2>
                            <h2>Rooms</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#4C3BCF"}}>10347</h2>
                            <h2>Workers</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
