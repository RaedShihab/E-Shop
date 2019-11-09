import React from 'react'
import {connect} from 'react-redux';

class ProductsItem extends React.Component {
    render() {
        console.log('ProductsItem',this.props)
        return (
            <div>
            {this.props.fromProps.map(item =>  
                <div key= {item.id}>
                        <div className="card" >
                            <img src={item.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <a href = {'/products/'+ item.id} className="btn btn-primary">Details</a>
                                </div>
                        </div>
                </div>
            )}
            </div>
            
        
        )
    }
}

// const mapStateToProps = (state)=> {
//     return {
//         fromProps: state
//     }
// }

export default connect((state)=> {
    return {
        fromProps: state
    }
})
(ProductsItem);