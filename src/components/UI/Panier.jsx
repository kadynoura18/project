import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { ShoppingCartAction } from "../../store/Shopping-cart-slice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function CustomizedBadges() {
    const CarLength=useSelector((state)=>state.shoppingCart.items.length)

    const dispatch= useDispatch()
    const handleClick=()=>{
      dispatch(ShoppingCartAction.toggleCartView())
    }
  return (
    <IconButton aria-label="cart" style={{backgroundColor:"wheat"}}>
      <StyledBadge badgeContent={CarLength}  onClick={handleClick} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
