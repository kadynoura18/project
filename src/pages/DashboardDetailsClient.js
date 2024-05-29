import React, { useContext, useEffect, useState } from 'react';
import '../styles/DashboardDetails.css';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import axios from 'axios';
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { ClientContext } from '../contexts/ClientContext';


export default function DashboardDetailsClient() {
  const { clientId } = useContext(ClientContext);
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadClient = async () => {
      try {
        setIsLoading(true);
        console.log("je me nomme ",clientId);
        const result = await axios.get(`http://localhost:8080/api/v1/rest/clients/${clientId}`);
        console.log('mon result',result.data);
        setClient(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (clientId) {
      loadClient();
    }
  }, [clientId, id]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  if (!client) {
    return <div>Aucune information renseigné.</div>;
  }

     
    return (
        <div className='DashboardDetails' >
             <div className="hauts">
            
                <Link className="upi-righht" to='/service' >liste des services </Link>
                <div className="Information upi">
            <div className="upi-left">
                <div className="noms"><h1>{client.nom}</h1></div>
                <div className="prenoms"><h2>{client.prenom}</h2></div>
            </div>
            <div className="photo">
                    <img src={client.photopath} alt="" />
                </div>
             </div>

             </div>
            <div className="part ones">
              
        <div className='Information-perso'>
        
            <div className="Information-perso downn">
                <div className='emails'>
                    <div className='uppi'>
                    <CiMail style={{fontSize:'23px',color:'#3b4abe'}} />
                    <h5>Email</h5>
                    </div>
                    <span>{client.email}</span>
                </div>

                <div className='pays'>
                    <div className='uppi'>
                    <IoLocationOutline style={{fontSize:'23px',color:'#3b4abe'}} />
                    <h5>Pays</h5>
                    </div>
                    <span>{client.Pays}</span>
                </div>

                <div className='telephones'>
                    <div className='uppi'>
                    <BsTelephone  style={{fontSize:'23px',color:'#3b4abe'}}/>
                    <h5>Telephone</h5>
                    </div>
                    <span>{client.numero}</span>
                </div>
                
            </div>
        </div>
            
            </div>
            <div className="part twos">
                <Link to='/liste' className="boxo">Reseverver</Link>
                <Link className="boxo" to='/MesReservations' >Mes reservations </Link>
                
            </div>
            <div className="part threes"></div>
        </div>
    );
}

