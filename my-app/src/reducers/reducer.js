import products from '../api/products.json';
import {showProductType} from '../action/action-types'
import {showAllProductsType} from '../action/action-types'

const reducer = (state= products, action)=> {
    let product = []
    if(action.type === showAllProductsType) {
        return products
    }
    if(action.type === showProductType) {
     product = products.filter((product) => {
        return action.id === product.id
    })
    console.log('from reducerrr', product)
    // setTimeout(()=> {return product},2000)
    return product
    }
    else {
     return state;
    }
}

export default reducer;