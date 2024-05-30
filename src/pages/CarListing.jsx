import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useSelector } from "react-redux";
import Cart from "../components/UI/Cart";
import { useState } from "react";
const CarListing = () => {
  const [search,setSearch]=useState("")
  const canIViewCart=useSelector((state)=> state.shoppingCart.isCartVisible)
  console.log(carData);
  
  return (
    <Helmet title="issa">
      <CommonSection title="liste des organisateurs de  services " />
      {canIViewCart && <Cart/> }
      <section>
        <Container>
          <Row>
            <Col lg="12">
              reche
              <input type="text" onChange={(e)=>{setSearch(e.target.value)}}  className="searchh" placeholder="recherche à partir des poste"/>
            </Col>

            {carData.filter((item)=>{
              return search.toLocaleLowerCase()==="" ? item :item.intitulé.toLocaleLowerCase().includes(search)
            }).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
