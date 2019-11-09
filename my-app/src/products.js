import React from 'react'
import ProductsItem from './productItem'
import getAllProducts from './api/getAllProducts'
// import {connect} from 'react-redux';

class Products extends React.Component {

    constructor(props) {
        super(props);
      }

    // componentDidMount() {
    //     getAllProducts.getAll()
    //     .then(data => {
    //         this.setState({
    //             products: data,
    //         })
    //     })
    // }
    
    render() {
        console.log(this.props)
        return (
        <div>
        <h1>
            Products
        </h1>
            <div className='row'>
                <div className={'col-4'} >
                  <ProductsItem />
                </div>
            </div>   
        </div>
        ) 
    }
}

// const mapStateToProps = (state)=> {
//     return {
//         fromProps: state
//     }
// }

// export default connect(mapStateToProps)(Products);
export default Products;