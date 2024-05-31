import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BapthItem from "../components/UI/BapthItem";
import bapthData from "../assets/data/bapthData ";
import Cart from "../components/UI/Cart";
import { useSelector } from "react-redux";

import { useState } from "react";
const BapthListing = () => {
  const [search,setSearch]=useState("")
  const canIViewCart=useSelector((state)=> state.shoppingCart.isCartVisible)
  return (
    <Helmet title="Birth">
   
      <CommonSection title="Liste des autres  services " />
     {canIViewCart && <Cart/> }
      <section>
        <Container>
          <Row>
            <Col lg="12">
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}}  className="searchh" placeholder="recherche à partir des poste"/>
            </Col>

            {bapthData.filter((item)=>{
              return search.toLocaleLowerCase()==="" ? item :item.intitulé.toLocaleLowerCase().includes(search)
            }).map((item) => (
              <BapthItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BapthListing;
