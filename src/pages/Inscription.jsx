import React from 'react'
import Helmet from '../components/Helmet/Helmet' 
import '../styles/inscription.css'
import { Link } from 'react-router-dom'
function Inscription() {
    return (
        

        <div className='insss'>  <div className='entête'>
        <h1>S'inscrire en tant que </h1>
        </div>
<div className='inscription'>
    


<div className='inscription-down'>
<Link to='/signinPrestataire' className="button-86">
 
    <div className="inscription-down-left-write"> Prestataire</div>
</Link>
<Link to='/signinClient' className="button-86">
<div className="inscription-down-right-write">Client</div>
</Link>
</div>
</div>
</div>
     
    )
}

export default Inscription
