import api from "./api";
import TokenService from "./token.service";
import axios from 'axios';

class AuthService {
  /**
   * Méthode asynchrone qui permet d'inscrire un client.
   * @param {string} nom
   * @param {string} prenom
   * @param {string} email
   * @param {string} mdp
   * @param {string} recaptchaValue
   * @param {File} photo
   * @returns {Promise<any>}
   */
  registerClient = async (nom, prenom, email, mdp, recaptchaValue, photo) => {
    const formData = new FormData();
    formData.append('client', JSON.stringify({ nom, prenom, email, mdp, recaptchaValue }));
    formData.append('photo', photo);

    try {
      const response = await api.post('/api/v1/rest/clients/inscription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  /**
   * Méthode asynchrone qui permet de se connecter.
   * @param {string} username
   * @param {string} password
   * @returns {Promise<any>}
   */
  userLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/connexion', {
        username,
        password
      });

      // Ajoutez des journaux de débogage pour vérifier la réponse de l'API
      console.log('Réponse de l\'API dans userLogin:', response.data);

      if (response.data && response.data.bearer) {
        TokenService.setUser(response.data);
        localStorage.setItem('token', response.data.bearer); // Stockez le token dans localStorage
      }

      return response.data;
    } catch (error) {
      console.error('Erreur dans userLogin:', error);
      throw error;
    }
  };
  /**
   * Méthode asynchrone qui permet d'inscrire un prestataire.
   * @param {string} nom
   * @param {string} prenom
   * @param {string} email
   * @param {string} mdp
   * @param {string} intitule
   * @param {string} recaptchaValue
   * @param {File} photo
   * @returns {Promise<any>}
   */
  registerPrestataire = async (nom, prenom, email, mdp, intitule, recaptchaValue, photo) => {
    const formData = new FormData();
    formData.append('prestataire', JSON.stringify({ nom, prenom, email, mdp, intitule, recaptchaValue }));
    formData.append('photo', photo);

    try {
      const response = await api.post('/api/v1/rest/prestataires/inscription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Méthode qui permet de se déconnecter.
   */
  logout = () => {
    TokenService.removeUser();
  };

  /**
   * Méthode qui renvoie les données de l'utilisateur actuel.
   * @returns {any}
   */
  getCurrentUser = () => {
    return TokenService.getUser();
  };
}

export default new AuthService();