import React from 'react'
import { ArrowRight, Clock, Location, Trending } from '../../icon/icon'
import { Link } from 'react-router-dom'

export default function Tours() {
    let TourCad=(props)=>{
        let {img,name,price,desc,trend,clock,loc}=props
        return(
            <div className='card'>
            <img src={img} alt='#'/>
            <div className='px-1'>
                <div className='d-flex'>
                    <h5 style={{color:"#4C3BCF"}}>{name}</h5>
                    <p className='ms-auto'style={{fontSize:"16px", fontWeight:"bold"}}><span className='h4'>{price}</span><span className=' text-black-50'>per day</span> </p>
                </div>
                <h5>{desc}</h5>
                <div className='d-flex gap-3 text-black-50'
                style={{fontSize:"13px", fontWeight:"bold"}}>
                    <div className='d-flex'>
                        <p><Trending/></p> 
                        <p>{trend}</p>
                    </div>
                    <div className='d-flex'>
                        <p><Clock/></p>
                        <p>{clock}</p>
                    </div>
                    <div className='d-flex'>
                        <p><Location/></p>
                        <p>{loc}</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer text-center text-white p-3 rounded" style={{background:"#4C3BCF",fontWeight:"bold"}}>
                Book Now
            </footer>
        </div>
        )
    }
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-5 col-sm-12 h5' style={{fontWeight:"bold"}}>
                <h1 style={{fontSize:"50px",fontWeight:"bold"}}>Trending Tours</h1>
                <p className='text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                <Link to={"alltours"} className='text-decoration-none' style={{color:"#4C3BCF"}}>View All Tours <ArrowRight/></Link>
            </div>
            <div className='col-md-7 col-sm-12'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <TourCad
                            img="images/trending1.PNG"
                            name="Beachfront"
                            price="$99"
                            desc="A Trip to the Bahamas and the Carribean Ocean"
                            trend="TRENDING"
                            clock="7 DAYS TOUR"
                            loc="AFRICA"
                        />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <TourCad
                            img="images/trending2.PNG"
                            name="Cruise"
                            price="$169"
                            desc="Cruise to the Mariana Trench and the Phillipines"
                            trend="TRENDING"
                            clock="15 DAYS TOUR"
                            loc="AUSTRALIA"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
