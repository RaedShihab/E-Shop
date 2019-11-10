import products from '../api/products.json';
import {showProductType} from '../action/action-types'
import {showAllProductsType} from '../action/action-types';
import {addItemToCartType} from '../action/action-types'

const reducer = (state=[], action)=> {
    let product = [];
    let cartProduct = [];

    if(action.type === showAllProductsType) {
        return products
    }
    else if(action.type === showProductType) {
     product = products.filter((product) => {
        return action.id === product.id
    })
    // setTimeout(()=> {return product},2000)
    return product
    }
    if(action.type === addItemToCartType) {
        // cartProduct = [...state, action.item];
        // console.log(state);
        // return cartProduct;
        alert('HHHI')
        return state;
    }
    else {
     return state;
    }
}

export default reducer;