export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        // Check if price is a string (and contains currency symbols)
        const price = typeof item.price === 'string'
            ? parseFloat(item.price.replace('₹', '').replace(',', ''))
            : item.price;  // If price is already a number, use it directly
        return amount + price;
    }, 0);
};

export const initialState = {
    basket : [{
        id:"1234322",
        title: "The Gathering Place Sign Wall Art Decor  Wooden Framed Large Home Kitchen Simple And Beautiful Wall Hanging gather Decoration (Black)",
        price : "₹2798",
        rating : 5,
        image : "https://m.media-amazon.com/images/I/81rIhRFGB3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
         
    }],
    user:null,
};


function reducer(state,action) {
    console.log(action);
    
    switch (action.type) {
        case 'ADD_TO_BASKET' : 
            // Logic adding item to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET' : 
            //Logic of removing item from basket.
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if(index>=0) {
                newBasket.splice(index,1);
                
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not present in the cart`
                );
            }
            return {...state,basket: newBasket};
            break;
        default : 
            return state;
    }
} 

export default reducer;