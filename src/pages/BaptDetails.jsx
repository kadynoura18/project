import React, { useEffect } from "react";

import bapthData from "../assets/data/bapthData ";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import { Link } from "react-router-dom";
const BaptDetails = () => {
  const { slug } = useParams();

  const singleCarItem = bapthData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleCarItem.price}.00 FCFA / JOUR
                  </h6>

                 
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                

               
              </div>
            </Col>

            
            

            <div className="toure">
            <Link to="#"  className="button-100 ">reserver  maintenant</Link>
           </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BaptDetails;
