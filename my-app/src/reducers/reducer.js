import products from '../api/products.json';
import {showProductType} from '../action/action-types'

const reducer = (state= products, action)=> {
    let product = []
    if(action.type === showProductType) {
     product = products.filter((product) => {
        return action.id === product.id
    })
    console.log('from reducerrr', product)
    return product
    }
    else {
     return state;
    }
}

export default reducer;