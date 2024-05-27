import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BirthItem from "../components/UI/BirthItem";
import birthData from "../assets/data/birthData";
import { useSelector } from "react-redux";
import Cart from "../components/UI/Cart";

const BirthListing = () => {
  const canIViewCart=useSelector((state)=> state.shoppingCart.isCartVisible)
  return (
    <Helmet title="Birth">
      <CommonSection title="liste des services d'anniversaire" />
      {canIViewCart && <Cart/> }
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
               

              
              </div>
            </Col>

            {birthData.map((item) => (
              <BirthItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BirthListing;
