import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useLoading } from '../contexts/LoadingContext';
import '../styles/GlobalSpinner.css';

const GlobalSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="global-spinner-container">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div>Chargement...</div>
    </div>
  );
};

export default GlobalSpinner;