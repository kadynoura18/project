import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useSelector } from "react-redux";
import Cart from "../components/UI/Cart";

const CarListing = () => {
  const canIViewCart=useSelector((state)=> state.shoppingCart.isCartVisible)
  return (
    <Helmet title="issa">
      <CommonSection title="liste des services de mariage" />
      {canIViewCart && <Cart/> }
      <section>
        <Container>
          <Row>
            <Col lg="12">
              reche
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
