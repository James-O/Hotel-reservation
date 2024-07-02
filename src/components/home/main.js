import React from 'react'

export default function Main() {
  return (
    <div className='bg-body-tertiary' style={{paddingTop:"8rem" }}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <div className='mt-5'>
                        <h1 style={{color:"#102C57",fontSize:"50px",fontWeight:"bold"}} >Find Perfect Hotels</h1>
                        <h1 style={{color:"#4C3BCF",fontSize:"50px",fontWeight:"bold", marginTop:"-20px"}}>anywhere you go.</h1>
                    </div>
                    <div className='my-5 h5' style={{color:"#686D76"}}>
                        We've been in the hotels business across the world<br/> for 5 years now. We assure you that you will always<br/>enjoy your stay with us.
                    </div>
                    <button className='rounded px-5 me-3 py-3 h5 border border-none' style={{background:"#4C3BCF",color:"#ffffff", width:"35%"}}>Sign Up</button>
                    <button className='rounded px-5 py-3 h5 border border-none'>Search Hotels</button>
                </div>
                    
                <div className='col-md-6 col-sm-12'>{Image}
                    <img src='images/mainImage.PNG' alt='mainImage' className='rounded w-100'/>
                </div>
            </div>
        </div>
    </div>
  )
}
