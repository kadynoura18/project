import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.intitule) {
      navigate('/dashboard-prestataire');
    } else {
      navigate('/dashboard-client');
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