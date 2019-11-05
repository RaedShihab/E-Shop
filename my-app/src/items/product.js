import React from 'react';
import getAllProducts from "../api/getAllProducts";

class Product extends React.Component {

    state = {
        loading: true,
        item : {},
        itemNumber: 0,
    }
    
    //  handelChangeItemsNumber = (e) => {
    //     this.setState({
    //         itemNumber: e.target.value
    //     },  console.log(this.state.itemNumber))
       
    // }

    handelChangeItemsNumber(e) {
        if(e.target.value < 0)
        return;
        this.setState({
            itemNumber: e.target.value
        }, console.log(this.state.itemNumber))
    }

    componentDidMount() {
        const id = this.props.match.params.id 
          getAllProducts.getItemByid(id)
          .then(itemById => {
              setTimeout(() => this.setState({
                loading:  false,
              item : itemById
      }),1000) 
                
        });
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
                    <button className='btn btn-primary'>
                        Add To Cart 
                    </button>
                   </div>


                </div>
            </div>
        )
    }
}

export default Product;