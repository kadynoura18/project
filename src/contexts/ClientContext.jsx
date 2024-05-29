import React, { createContext, useState } from 'react';

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientId, setClientId] = useState(null);

  return (
    <ClientContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClientContext.Provider>
  );
};
