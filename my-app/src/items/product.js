import React from 'react';
import {showProductAction} from '../action/action-creator';
import {connect} from 'react-redux';
import {addItemToCartAction} from '../action/action-creator';

class Product extends React.Component {
    constructor() {
        super()
        this.state = {
        loading: true,
        item : {},
        itemNumber: '',
        }
    }
    
    handelChangeItemsNumber(e) {
        if(e.target.value < 0) {
        return;
        }
        this.setState({
            itemNumber: e.target.value
        })
    }
    
    componentDidMount() {
        const id = parseInt(this.props.match.params.id )
        this.props.showProductAction(id)
        setTimeout(()=>this.setState({
            item: this.props.location.state.item,
            loading: false
        }), 1000)
    }

    render() {
        if(this.state.loading) {
            return 'Loading...'
        }
        
         const item = this.state.item
        return (
            <div>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <img src={item.image}  width={'100%'}/>
                    </div>
                   <div className={'col-6'}>
                    <h1>{item.name}</h1>
                    <p>Price: {item.price}$</p>
                    <p>Description: {' '+item.description}</p>
                    <br/><br/>
                    <input type='number' value={this.state.itemNumber} onChange={this.handelChangeItemsNumber.bind(this)} ></input>
                    <br/><br/>
                    <p>
                        {this.state.itemNumber * item.price}
                    </p>
                    <button 
                    onClick={()=>this.props.addItemToCartAction(item)}
                    className='btn btn-primary'>
                        Add To Cart 
                    </button>
                   </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=> {
    return {
        product1: state
    }
}, {addItemToCartAction, showProductAction})(Product);