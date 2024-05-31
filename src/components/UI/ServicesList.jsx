import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ServicesList = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div data-aos="zoom-in-up"  data-aos-duration="3000" className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
