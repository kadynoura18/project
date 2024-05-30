import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner'; // Importation du spinner
import '../styles/GlobalSpinner.css'; // Importation des styles du spinner

function NewPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // État pour le message de succès
  const [isLoading, setIsLoading] = useState(false); // État pour le spinner
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Afficher le spinner

    try {
      await axios.post('http://localhost:8080/nouveau-mot-de-passe', { email, code, password });
      setSuccess('Votre mot de passe a été mis à jour avec succès. Vous serez redirigé vers la page d\'accueil.');
      setError(null);

      // Rediriger vers la page d'accueil après 3 secondes
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    } catch (error) {
      console.error(error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
      setSuccess(null);
    } finally {
      setIsLoading(false); // Masquer le spinner
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Mettre à jour votre mot de passe</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            style={{ width: '40%', height: '3em' }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Code reçu</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="code"
            style={{ width: '40%', height: '3em' }}
            value={code}
            onChange={(event) => setCode(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="newPassword"
            style={{ width: '40%', height: '3em' }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary mt-3" disabled={isLoading}>
          {isLoading ? (
            <div className="spinner-container">
              <TailSpin height="20" width="20" color="#fff" />
            </div>
          ) : (
            'Mettre à jour'
          )}
        </button>
      </form>
    </div>
  );
}

export default NewPassword;