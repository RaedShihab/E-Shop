import React from 'react';
import products from './products.json';


function getAll() {
    return Promise.resolve(products)
   
}

export default getAll;