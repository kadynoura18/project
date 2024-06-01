import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/Kid’s high class decoration.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = ({ aboutClass }) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div data-aos="fade-right"   data-aos-duration="3
            000"  className="about__section-content">
              <h4 className="section__subtitle">À propos de nous</h4>
              <h2 className="section__title">Bienvenue au service d'organisation de cérémonie de Envent Planer</h2>
              <p data-aos-duration="3000" data-aos="fade-right" className="section__description">
              Vous rêvez d'une cérémonie parfaite ? Que ce soit pour un mariage, un anniversaire, une fête d'entreprise ou tout 
              autre événement spécial,
               Eventplaner est là pour transformer vos rêves en réalité.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p data-aos="fade-right"  data-aos-duration="3000"  className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Anniversaire
                  
                </p>

                <p data-aos="fade-right" data-aos-duration="3000"  className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Mariage
                  
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p data-aos="fade-right"   className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line" data-aos-duration="3000"></i> Baptème
                  
                </p>

                <p data-aos="zoom-in"  data-aos-duration="3000" className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Autres
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6"  >
            <div data-aos="flip-up" data-aos-duration="3000" className="about__img"    >
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
