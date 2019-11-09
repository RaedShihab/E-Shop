import {showAllProductsType} from './action-types';
import {showProductType} from './action-types';

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