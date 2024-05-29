import axios from "axios";
class UserService {
    static BASE_URL = "http://localhost:8080";
 
    userLogin = async (username, password) => {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/connexion`, {
                username,
            password
          });
    
          // Ajoutez des journaux de débogage pour vérifier la réponse de l'API
          console.log('Réponse de l\'API dans userLogin:', response);
    
          return response;
        } catch (error) {
          console.error('Erreur dans userLogin:', error);
          throw error;
        }
      };
    
    static async PrestataireRegister(userData) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/api/v1/rest/prestataires/inscription`, userData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getAllPrestataire(token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/api/v1/rest/prestataires/list`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getYourProfile(token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getPrestataireById(id) {
        try {
            const token = localStorage.getItem('token'); // Récupérez le token depuis localStorage
            const response = await axios.get(`${UserService.BASE_URL}/api/v1/rest/prestataires/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }
    static async deletePrestataire(prestataireId, token) {
        try {
            const response = await axios.delete(`${UserService.BASE_URL}/api/v1/rest/prestataires/${prestataireId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async updatePrestataire(prestataireId, userData, token) {
        try {
            const response = await axios.put(`${UserService.BASE_URL}/api/v1/rest/prestataires${prestataireId}`, userData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    /** AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    static isAdmin() {
        const role = localStorage.getItem('role');
        return role === 'ADMINISTRATEUR';
    }

    static isPrestataire() {
        const role = localStorage.getItem('role');
        return role === 'UTILISATEUR';
    }

    static adminOnly() {
        return this.isAuthenticated() && this.isAdmin();
    }
}

export default UserService;