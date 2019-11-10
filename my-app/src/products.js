import React from 'react';
import ProductsItem from './productItem';
import getAllProducts from './api/getAllProducts';
import {connect} from 'react-redux';
import {showProductAction} from './action/action-creator';
import {showAllProductsAction} from './action/action-creator';
import { Link } from "react-router-dom";


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

    componentDidMount() {
        this.props.showAllProductsAction()
    }
    
    render() {
        return (
        <div>
        <h1>
            Productsss
        </h1>
            <div className='row'>
                <div className={'col-4'}>
                <div>
            {this.props.fromProps.map(item =>  
                <div key= {item.id}>
                        <div className="card" >
                            <img src={item.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <Link to={'product/'+item.id} className="btn btn-primary">Details</Link>
                                </div>
                        </div>
                </div>
            )}
            </div>
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
export default connect((state)=> {
    return {
        fromProps: state
    }
}, {showAllProductsAction, showProductAction})
(Products);