import {showProductType} from './action-types';

export const showProductAction = (id)=> {
    return {
        type : showProductType,
        id : id
    }
}