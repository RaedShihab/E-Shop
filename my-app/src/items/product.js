import React from 'react';
import getAllProducts from "../api/getAllProducts";

class Product extends React.Component {

    state = {
        loading: true,
        item : {},
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
        console.log(item)
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
                    <input type='number'></input>
                    <br/><br/>
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