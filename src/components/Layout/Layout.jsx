import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { PrestataireProvider } from "../../contexts/PrestataireContext";
import { ClientProvider } from "../../contexts/ClientContext";
import { LoadingProvider } from "../../contexts/LoadingContext";

const Layout = () => {
  return (
    <Fragment>
      
      <ClientProvider>
      <PrestataireProvider>
      <Header />
      <LoadingProvider>
      <div>
        
        <Routers />
      </div>
      </LoadingProvider>
      </PrestataireProvider>
      </ClientProvider>
      
      <Footer />
    </Fragment>
  );
};

export default Layout;
