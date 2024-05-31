import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useDispatch } from "react-redux";
import { ShoppingCartAction } from "../../store/Shopping-cart-slice";




const CarItem = ({item}) => {
 
  const dispatch=useDispatch()

  const handleClick=()=>{
     dispatch(ShoppingCartAction.addItemsToCart(item))
   }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
    <div className="car__item">
      <div className="car__img">
        <img src={item.imgUrl} alt="" className="w-100" />
        
      </div>

      <div className="car__item-content mt-4">
        <h4 className="section__title text-center">{item.carName}</h4>
        <h6 className="rent__price text-center mt-">
          {item.price}FCFA <span>/ Jour</span>
        </h6>

      
        <h5>{item.intitulé}</h5>
       <div className="boot">
       <button className="button-79" onClick={handleClick}>
          reserver
        </button>

        <button className="reserver details">
          <Link to={`/cars/${item.carName}`}>Details</Link>
        </button>
       </div>
      </div>
    </div>
  </Col>
  );
};

export default CarItem;
