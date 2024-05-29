import React, { createContext, useState } from 'react';

export const PrestataireContext = createContext();

export const PrestataireProvider = ({ children }) => {
  const [prestataireId, setPrestataireId] = useState(null);

  return (
    <PrestataireContext.Provider value={{ prestataireId, setPrestataireId }}>
      {children}
    </PrestataireContext.Provider>
  );
};
