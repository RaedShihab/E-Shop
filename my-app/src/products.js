import React from 'react'
import ProductsItem from './items/productItem'
import getAll from './api/getAllProducts'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            products: []
         };
      }

    componentDidMount() {
        getAll()
        .then(data => {
            this.setState({
                products: data,
            })
           console.log(this.state.products)
        })
    }
    
    render() {
        return (
        <div>
        <h1>
            Products
        </h1>
            <div className='row'>
                <div className={'col-4'} key={this.state.products}>
                  <ProductsItem products={this.state.products} />
                </div>
            </div>   
        </div>
        ) 
    }
}

export default Products;