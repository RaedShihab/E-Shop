import products from './products.json';


function getAll() {
    return Promise.resolve(products)
   
}

function getItemByid(id) {
  const item = products.find(item => item.id === parseInt(id))
//   return item    
   return Promise.resolve(item)
}

export default {
    getItemByid,
    getAll
}