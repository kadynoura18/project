import React from 'react'
 import Helmet from '../components/Helmet/Helmet'
 import '../styles/Listing.css'
 import CommonSection from '../components/UI/CommonSection'
 import Testimonial from '../components/UI/Testimonial'
 import { Link } from 'react-router-dom'
 
function SevicesListing() {
    return (
       < Helmet title="Services Listing" >
        <CommonSection title=" Services Listing" />
        <div className='up'>
            <div className="upp"><h5>Nos Catégories de </h5></div>
            <div className="downn"><h4> de services</h4></div>
        </div>
        <div className='Listing'>
      <div className='organisateur wedd'>
        <h3>0rganisateur d'évènement</h3>
      <div><Link to="/Mariageservice" className="listing-box one"></Link></div>
      </div>
        
        <div className='organisateur other'>
        <h3>Autres Services</h3>
        <Link to='/Baptservice' className="listing-box three"></Link>
        </div>
        </div>
        
        <Testimonial></Testimonial>
       </ Helmet>
    )
}

export default SevicesListing
