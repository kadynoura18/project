import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useDispatch } from "react-redux";
import { shppingCartActions } from "../../store/Shopping-cart-slice";


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
          ${item.price}.00 <span>/ Day</span>
        </h6>

        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
         
        </div>

        <button className="reserver w-50 car__item-btn car__btn-rent" onClick={handleClick}>
          reserver
        </button>

        <button className=" w-50 car__item-btn car__btn-details">
          <Link to={`/cars/${item.carName}`}>Details</Link>
        </button>
      </div>
    </div>
  </Col>
  );
};

export default CarItem;
