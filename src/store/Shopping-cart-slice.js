
import   {createSlice }from '@reduxjs/toolkit'


const ShoppingCartSlice=createSlice({
    name:'shopping-cart',
    initialState:{
        items:[],
        isCartVisible:false,
    },
    reducers:{
        toggleCartView(state){
            state.isCartVisible=!state.isCartVisible;
        },
        addItemsToCart(state,action){
            const newService=action.payload;
            console.log(newService);
            
            const existingProductItem=state.items.find(item=>item.id===newService.id)

            if(!existingProductItem){
                state.items.push(
                    {
                     id:newService.id,
                     title:newService.carName,
                     price:newService.price,
                     cover:newService.imgUrl,
                     quantity:1
                    }
                    )

            }
            else{
                existingProductItem.quantity++;
            }
          
        },
        removeItemToCart(state,action){
            state.items=state.items.filter(item=>item.id !== action.payload)
        }
    }
})
export const ShoppingCartAction=ShoppingCartSlice.actions;
export default  ShoppingCartSlice;