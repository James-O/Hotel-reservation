import React from 'react'
import { Email, Facebook, TwitterX, Youtube } from '../icon/icon'

export default function Footer() {
  return (
    <div>
        <div style={{background:"#304463"}} className='text-white p-5 mt-5'>
            <div className='d-flex p-5' style={{marginLeft:"10rem"}}>
                <div className='d-flex gap-3 me-5'>
                    <div className='text-success'>
                        <Email/>
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <h1 style={{fontWeight:"bold",fontSize:"50px"}}>Newsletter</h1>
                        <h5 style={{marginTop:"-10px"}}>Subscribe now to get our latest blog posts.</h5>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <input type='text' className='p-2 h5 rounded border border-none' placeholder='Your email address' style={{background:"#0C1844",width:"20rem",height:"3.5rem"}}/>
                    </div>
                    <div>
                        <button className='p-2 h5 rounded bg-success text-white border border-none' style={{width:"20rem",height:"3.5rem"}}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{background:"#001C30",paddingTop:"8rem",paddingBottom:"10rem"}} className='text-center text-white'>
            <div>
                <h1>TR Travel Reservation</h1>
                <div className='d-flex my-5'>
                    <div className='d-flex gap-5 mx-auto'>
                        <h5>Home</h5>
                        <h5>About</h5>
                        <h5>Contact Us</h5>
                        <h5>Blog</h5>
                        <h5>Reviews</h5>
                    </div>
                </div>
                <div className='d-flex mb-5'>
                    <div className='d-flex gap-5 mx-auto'>
                        <h5><Facebook/></h5>
                        <h5><TwitterX/></h5>
                        <h5><Youtube/></h5>
                    </div>
                </div>
                <footer>&copy; Copyright 2024, Travel Reservation Inc. All Rights Reserved.</footer>
            </div>
        </div>
    </div>
  )
}
