import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
    
    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        console.log('User:', user); // Ajoute ce log
        if (user.intitule) {
          console.log('Navigating to dashboard-prestataire'); // Ajoute ce log
          navigate('dashboard-prestataire');
        } else {
          console.log('Navigating to dashboard-client'); // Ajoute ce log
          navigate('/dashboard-client');
        }
      } catch (error) {
        console.error('Error parsing user JSON:', error);
        navigate('/login'); // Redirige vers la page de connexion en cas d'erreur
      }
    } else {
      console.log('No user or token found in localStorage'); // Ajoute ce log
      navigate('/login'); // Redirige vers la page de connexion
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <PopupState variant="popover" popupId="profile-menu">
      {(popupState) => (
        <React.Fragment>
          <Button 
            variant="contained" 
            {...bindTrigger(popupState)} 
            style={{ backgroundColor: '#000080', color: 'white' }}
          >
            Profil
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => { popupState.close(); handleDashboardClick(); }}>Dashboard</MenuItem>
            <MenuItem onClick={() => { popupState.close(); handleLogout(); }}>Déconnexion</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default Profile;