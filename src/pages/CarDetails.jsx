import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import "../styles/Details.css"

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container className="Cardetail">
          <Row>
            <Col lg="6">
              <div  >
                <img src={singleCarItem.imgUrl} alt="" className="w-100" />
                </div>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleCarItem.price}.00  FCFA/ Day
                  </h6>

                 
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                
                <div className="toure">
            <Link to="#"  className="button-100 ">reserver  maintenant</Link>
           </div>
               
              </div>
            </Col>

          

           
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
