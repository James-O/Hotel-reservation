import React from 'react'

export default function Posts() {
    let Popular =(props)=>{
        let {img,tips,passport,name,desig} = props
        return(
            <>
                <img src={img} alt='popular' className='w-100 rounded mb-4'/>
                <h5>{tips}</h5>
                <p className='text-black-50'>
                    Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.
                </p>
                <div className='d-flex'>
                    <img src={passport} style={{width:"15%",height:"15%"}} alt='passport'/>
                    <div className='ms-3'>
                        <h5>{name}</h5>
                        <p className='text-black-50'>{desig}</p>
                    </div>
                </div>
            </>
        )
    }
    
    let Recent = (props)=>{
        let {desc,name,img}=props
        return(
            <div className='row mb-5'>
                <div className='col-md-8 col-sm-12'>
                    <h5>{desc}</h5>
                    <p className='text-black-50'>{name}</p>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <img src={img} className='rounded' alt='recent'/>
                </div>    
            </div>
        )
    }
  return (
    <div className='container my-5'>
        
        <div className='row'>
        <div className='d-flex my-4'>
            <h1 style={{fontWeight:"bold", fontSize:"50px"}}>Popular posts</h1>
        </div>
            <div className='col-md-7 col-sm-12'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                       <Popular
                        img = "images/popular1.PNG"
                        tips = "Tips on how to travel safely in foreign countries"
                        passport="images/passport2.PNG"
                        name="Charlotte Delus"
                        desig="Travel Advocate"
                       /> 
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <Popular
                            img = "images/popular2.PNG"
                            tips = "Tips on how to travel safely in foreign countries"
                            passport="images/passport1.PNG"
                            name="Adam Cuppy"
                            desig="Vlogger"
                        /> 
                    </div>
                </div>
            </div>
            <div className='col-md-5 col-sm-12'>
            <h1 style={{fontWeight:"bold", fontSize:"50px",marginTop:"-16%"}} className='ms-5 mb-3'>Recent Posts</h1>
                <div className='ms-5'>
                    <Recent
                        desc="Getting the most out of your vacation"
                        name="Aaron Patterson"
                        img="images/recent1.PNG"
                    />
                    <Recent
                        desc="Choosing the perfect Safaris in Africa"
                        name="Sam Phipphen"
                        img="images/recent2.PNG"
                    />
                    <Recent
                        desc="Hiking during the monsoon in Asia"
                        name="Tony Hawk"
                        img="images/recent3.PNG"
                    />
                    <Recent
                        desc="Must carry items while travelling to Thailand"
                        name="Himali Turn"
                        img="images/recent4.PNG"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
