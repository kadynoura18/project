import React, { useContext, useEffect, useState } from 'react';
import '../styles/DashboardDetails.css';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import axios from 'axios';
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { PrestataireContext } from '../contexts/PrestataireContext';


export default function DashboardDetailsPrestataire() {
  const { prestataireId } = useContext(PrestataireContext);
  const [prestataire, setPrestataire] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadPrestataire = async () => {
      try {
        setIsLoading(true);
        console.log("je me nomme ",prestataireId);
        const result = await axios.get(`http://localhost:8080/api/v1/rest/prestataires/${prestataireId}`);
        console.log('mon result',result.data);
        setPrestataire(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (prestataireId) {
      loadPrestataire();
    }
  }, [prestataireId, id]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  if (!prestataire) {
    return <div>Aucune information renseigné.</div>;
  }

  return (
    <div className='DashboardDetails'>
      <div className="hauts">
        <Link className="upi-righht prestata" to='/service'>liste des services</Link>
        <div className="Information upi">
          <div className="upi-left">
            <div className="noms"><h1>{prestataire.nom}</h1></div>
            <div className="prenoms"><h2>{prestataire.prenom}</h2></div>
          </div>
          <div className="photo">
            <img src={prestataire.photoPath} alt="" />
          </div>
        </div>
      </div>
      <div className="part ones">
        <div className='Information-perso'>
          <div className="Information-perso downn">
            <div className='emails'>
              <div className='uppi'>
                <CiMail style={{ fontSize: '23px', color: 'orange' }} />
                <h5>Email</h5>
              </div>
              <span>{prestataire.email}</span>
            </div>
            <div className='pays'>
              <div className='uppi'>
                <IoLocationOutline style={{ fontSize: '23px', color: 'orange' }} />
                <h5>Domaine</h5>
              </div>
              <span>{prestataire.intitule}</span>
            </div>
            <div className='telephones'>
              <div className='uppi'>
                <BsTelephone style={{ fontSize: '23px', color: 'orange' }} />
                <h5>Telephone</h5>
              </div>
              <span>{prestataire.numero || 'Non renseigné'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="part twos">
        <Link to='/liste' className="boxo prestatai">Ajouter une nouvelle réservation</Link>
        <Link className="boxo prestatair" to='/MesReservations'>Mes réservations en cours</Link>
      </div>
      <div className="part threes"></div>
    </div>
  );
}
