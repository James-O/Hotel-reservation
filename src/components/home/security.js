import React from 'react'
import { ArrowRight, Secure, Slider, Support } from '../../icon/icon'

export default function Security() {
  let SecureCard = (props)=>{
    let {icon,name,desc,desc2,link}=props
    return(
      <div className='hover-zoom'>
          <div className='rounded-pill p-3 bg-body-tertiary mx-auto' style={{width:"70px"}}>{icon}</div>
          <h4>{name}</h4>
          <p>{desc}<br/> {desc2}</p>
          <a href={link} className='text-decoration-none' style={{color:"#4C3BCF"}}>Learn more <ArrowRight/></a>
      </div>
    )
  }
  return (
    <div className='container text-center p-5 my-4'>
       <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <SecureCard
            icon={<Secure/>}
            name="Secure"
            desc="We strictly only deal with vendors" desc2="that provide top notch security"
            link="google.com"
          /> 
        </div>
        <div className='col-md-4 col-sm-12'>
        <SecureCard
            icon={<Support/>}
            name="24/7 Support"
            desc="We strictly only deal with vendors" desc2="that provide top notch security"
            link="google.com"
          />  
        </div>
        <div className='col-md-4 col-sm-12'>
        <SecureCard
            icon={<Slider/>}
            name="Customizable"
            desc="We strictly only deal with vendors" desc2="that provide top notch security"
            link="google.com"
          /> 
        </div>
       </div>
    </div>
  )
}
