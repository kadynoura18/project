import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
//import ServicesList from "../components/UI/ServicesList";
import ServicesListing from '../pages/SevicesListing'
import Inscription from "../pages/Inscription";
import SigninClient from "../components/UI/SigninClient";
import SigninPrestataire from "../components/UI/SigninPrestataire";
//import ClientLogin from "../pages/ClientLogin";
import LoginFormulaire from "../components/UI/LoginFormulaire.jsx";
import CodeConfirmation from "../pages/CodeConfirmation.jsx";
import BirthDetails from "../pages/BirthDetails.jsx";
import BirthListing from "../pages/BirthListing.jsx";
import BaptDetails from "../pages/BaptDetails.jsx";
import BapthListing from "../pages/BapthListing.jsx";
import Dashh from  '../pages/Dashh.jsx';
import Accorde from '../pages/Accorde.jsx';
//import Issa from "../components/UI/issa.js";
import DashboardDetailsPrestataire from "../pages/DashboardDetailsPrestataire.js";
import AjouterDeService from "../pages/AjouterDeService.js";
import DashboardDetailsClient from "../pages/DashboardDetailsClient.js";
import Profile from "../components/UI/Profile.jsx";
import { LoadingProvider } from "../contexts/LoadingContext.jsx";
import NewPassword from "../pages/NewPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import { AuthProvider } from "../contexts/AuthContext.js";
const Routers = () => {
  return (
    <AuthProvider>
    <LoadingProvider>
    <Routes>
      
      <Route path="/" element={<Navigate to="/home" />} />
     
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<ServicesListing />} />
      <Route path="/Mariageservice" element={<CarListing />} /> 
      <Route path="/cars/:slug" element={<CarDetails />} />

      <Route path="/Birthservice" element={<BirthListing />} /> 
      <Route path="/birth/:slug" element={<BirthDetails />} />


      <Route path="/Baptservice" element={<BapthListing />} /> 
      <Route path="/bapt/:slug" element={<BaptDetails />} />

      <Route path="/profil" element={<Profile />} />


      <Route path="/inscription" element={<Inscription />} />
      <Route path="/signinClient" element={<SigninClient />} />
      <Route path="/signinPrestataire" element={<SigninPrestataire />} />
      <Route path="/login" element={<LoginFormulaire />} />
      <Route path="code-confirmation" element={<CodeConfirmation />}/>
      <Route path='/issa'  element={ <Dashh/> } />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route path='/MesReservations'  element={ <Accorde/> } />
      <Route path='/add'  element={ <AjouterDeService/> } />
   
      <Route path='/dashboard-prestataire'  element={ <DashboardDetailsPrestataire/> } />
      <Route path='/dashboard-client'  element={ <DashboardDetailsClient/> } />

      <Route path="/reset-password" element ={<ResetPassword/>}/>
      <Route path="/new-password" element = {<NewPassword/>} /> 

      

      <Route path="*" element={<NotFound />} />
    </Routes>
    </LoadingProvider>
    </AuthProvider>
  );
};

export default Routers;
