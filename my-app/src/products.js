import React from 'react'
import ProductsItem from './productItem'
import getAllProducts from './api/getAllProducts'
import {connect} from 'react-redux';
import {showProductAction} from './action/action-creator';
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
        return (
        <div>
        <h1>
            Products
        </h1>
            <div className='row'>
                <div className={'col-4'} >
                <div>
            {this.props.fromProps.map(item =>  
                <div key= {item.id}>
                        <div className="card" >
                            <img src={item.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <button onClick={()=> {
                                        this.props.showProductAction(item.id)
                                         this.props.history.push('/product')
                                        }}  className="btn btn-primary">Details</button>
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
}, {showProductAction})
(Products);