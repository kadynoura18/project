import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
//import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import PrestataireService from '../Service/userService';
import { Token } from '@mui/icons-material';
import UserService from '../Service/userService';

const LoginFormulaire = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 // const [recaptchaValue, setRecaptchaValue] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
 // const [recaptchaError, setRecaptchaError] = useState('');

 // const recaptchaRef = useRef(null);
  const navigate = useNavigate();
  const userService = new UserService();


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Réinitialiser les erreurs
    setUsernameError('');
    setPasswordError('');
  //  setRecaptchaError('');

    if (!username || !password) {
      if (!username) setUsernameError('Veuillez entrer votre nom d\'utilisateur');
      if (!password) setPasswordError('Veuillez entrer votre mot de passe');
     // if (!recaptchaValue) setRecaptchaError('Veuillez vérifier que vous êtes un humain');
      return;
    }
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
    console.log('Token:', Token);


    try {
      const response = await userService.userLogin(username, password);

      if (response && response.data) {
        console.log('Token Bearer:', response.data.token);
        localStorage.setItem('token', response.data.token); // Stockez le token dans localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Stockez les informations de l'utilisateur dans localStorage


         // Stockez le nom d'utilisateur dans localStorage

        navigate("/home");
      } else {
        setPasswordError('Mot de passe incorrect');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      if (error.response && error.response.status === 403) {
        setPasswordError('Accès refusé. Veuillez vérifier vos informations d\'identification.');
      } else {
        setPasswordError('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
      }
    }
  };

{/*
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(''); // Réinitialiser l'erreur lorsque le champ reCAPTCHA est rempli
  };
*/}
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ fontWeight: 'bold', marginTop:'7em',marginBottom:'7em'}}>
      <Row>
        <Col>
          <h1 className="text-center mb-5" style={{ fontWeight: 'bold'}}>CONNEXION</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formUsername">
                  <FormLabel>Nom d'utilisateur</FormLabel>
                  <Form.Control
                    type="text"
                    placeholder="Votre nom d'utilisateur"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setUsernameError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px' }}
                    isInvalid={!!usernameError}
                  />
                  {usernameError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPassword">
                  <FormLabel>Mot de passe</FormLabel>
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px',marginBottom:'20px'}}
                    isInvalid={!!passwordError}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            {/*  <Col>
              
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ld6sNYpAAAAAAoYySttwTTzhAJfCxj_9ROChLBi"
                  onChange={handleRecaptchaChange}
                  style={{ width: '100%', height: '40px', marginBottom:'40px'}}
                  isInvalid={!!recaptchaError}
                  />
                {recaptchaError && <div className="invalid-feedback">Ce champ est requis</div>}
              </Col>*/}
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit" style={{ width: '100%', height: '40px', marginTop: '10px' , marginBottom:'25px' }}>
                  Se connecter
                </Button>
              </Col>
            </Row>
            <div className="text-center mt-3">
              Pas de compte? <a href="/inscription" style={{ fontWeight:'bold'}}>S'inscrire</a>
            </div>
          </Form> <br />
          <a href="/reset-password" style={{color: 'red', fontWeight:'bold'}}>Mot de passe oublié</a>

        </Col>
      </Row>
    </Container>
  );
};

export default LoginFormulaire;
