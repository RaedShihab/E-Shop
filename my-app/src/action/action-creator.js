import {showAllProductsType} from './action-types';
import {showProductType} from './action-types';
import {addItemToCartType} from './action-types';

export const showAllProductsAction = ()=> {
    return {
        type : showAllProductsType
    }
} 

export const showProductAction = (id)=> {
    return {
        type : showProductType,
        id : id
    }
}

export const addItemToCartAction = (item)=> {
    return {
        type : addItemToCartType,
        item: item
    }
}