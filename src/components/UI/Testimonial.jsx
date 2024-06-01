import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/loraine.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import { height } from "@mui/system";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial ">
        <p className="section__description">
        <p className="section__description comment">
        Mon expérience avec l' application était  satisfaisante.Les prix etaient abordable
        et les prestataires accueillants et bienveillants. la ceremonie c'est bien passee mes invites etaient juste emerveiller par la qualite du service surtout le srvice traiteur .je remercie eventplanner et je vous le conseil  pour les événements .       </p>
          
        </p>

        <div className="tofwork  mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className=" w-25 h-25 rounded-2"/>
       

          <div>  
            <h6 className="mb-0 mt-3">lorene</h6>
            <p className="section__description">Informaticienne</p>
          </div>
        </div>
      </div>

      <div className="testimonial ">
        <p className="section__description comment">
        Mon expérience avec l' application était globalement satisfaisante. L'application
         offrais plusieurs fonctionnalités utiles pour mon evenement, 
           les notifications en temps réel. Cependant, j'ai rencontré 
         quelques problèmes de lenteur  pendant son utilisation, ce qui a affecté légèremenT
          mon expérience. 
        </p>
 
        <div className="tofwork mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dasso Yasmine</h6>
            <p className="section__description">Professeur du Cames</p>
          </div>
        </div>
      </div>

      <div className="testimonial ">
        <p className="section__description comment">
          j'ai tester l appkication
          lorsque de devais organiser l anniversaire supprise de mon petit ami je me suis laisse guide par votre wedingplanner.
           l anniversaire etait spectaculaire j etait trop satisfaite,
          mon petit ami aussi je vous remercie eventplaner une fois eventplaner toujour.je vous rassure que le service est de qualite
        </p>

        <div className=" tofwork  mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3"> KLA DIO YVE</h6>
            <p className="section__description ">secretaire</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section__description comment">
          Apres avoire utilse votre service je suis tres satisfaite vos prestataire en plus d'etre performant,acceuillant et respectueux
          Avec un qualite de prix favorable votre application ma permis de realise un mariage de reve pour ma fille .je reviendrais lorsque j'aurais encore un evenement je vous le conseil eventplaner
          ?
        </p>

        <div className=" tofwork mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3"> Diaith Urielle</h6>
            <p className="section__description ">Chef d'entreprise</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
