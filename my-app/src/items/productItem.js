import React from 'react'

class ProductsItem extends React.Component {
    render(props) {
        console.log(this.props)
        return (
        <div>    
            <div className="card" >
                <img src={'/imges/1.jpg'} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Price 100$</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
            </div>  
        </div>
        ) 
    }
}

export default ProductsItem;