import React from 'react';
import getAllProducts from "../api/getAllProducts";
import products from '../api/products.json';
import {connect} from 'react-redux'

class Product extends React.Component {

    state = {
        loading: true,
        item : {},
        itemNumber: '',
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
        setTimeout(()=>this.setState({
            item: this.props.product[0],
            loading: false
        }), 1000)
    }

    // getProduct = ()=> {
    //     console.log('props', this.props )
    //     const id = this.props.match.params.id;
    //     const product = products.filter((item)=> {1
    //         return item.id === id;
    //     })
    //     console.log('dsds', product)
    //     return product;
    // }

    // componentDidMount() {
    //    this.setState({
    //     item: this.getProduct(),
    //     loading: false
    //    })
    //     // async function async() {
    //     //     let item = await getAllProducts.getItemByid(id)
    //     //     console.log(item) 
    //     //     return item
    //     // }
    //     //   async()
    //     //   .then(item => {
    //     //       this.setState({
    //     //           item: item,
    //     //           loading: false
    //     //       })
    //     //   }) .catch (err => {
    //     //       alert('ERR')
    //     //   })
        
    // //       getAllProducts.getItemByid(id)
    // //       .then(itemById => {
    // //           setTimeout(() => this.setState({
    // //             loading:  false,
    // //             item : itemById
    // //   }),1000) 
                
    // //     });
    // }

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
                    <button className='btn btn-primary'>
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
        product: state
    }
})(Product);