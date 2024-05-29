import React, { useState } from 'react';
import { Form, Button, InputGroup, Row, Col, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CodeConfirmation() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!code) {
      alert('Tous les champs doivent être remplis');
      return;
    }
    try {
      // Faire une requête axios avec le code
      const response = await axios.post('http://localhost:8080/activation', { code }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Si la requête réussit, rediriger l'utilisateur vers la page de connexion
      navigate(`/login/home/zakaria/Bureau/front-end bien/src/pages/DashboardDetailsPrestataire.js`);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      if (error.response) {
        alert(error.response.data.message); // Afficher le message d'erreur renvoyé par l'API
      }
    }
  };

  return (
    <center style={{ display: 'flex', alignItems: 'center', paddingTop: '30px', height: '100vh', marginLeft: '250px' }}>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
          <h2>Votre code de confirmation ✅ ✅</h2>
          <h6>Le code que vous avez reçu est valable pour 5 minutes </h6>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Veullez entrer le code"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </InputGroup>
        </Form>
        <Form inline onSubmit={onSubmit}>
          <Row>
            <Col xs="auto">
              <Button type="submit">
                Envoyer
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </center>
  );
}

export default CodeConfirmation;
