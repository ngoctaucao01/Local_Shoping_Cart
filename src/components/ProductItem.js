import React, {Component} from 'react';

class ProductItem extends Component{
    render() {
        const {onItemClick}=this.props;

        return(
            <div className="products" id="products">
                <div>
                    <h1>{this.props.item.title}</h1>
                    <h1>{this.props.item.price}</h1>
                    <button onClick={onItemClick}>Add to cart</button>
                    <hr/>
                    
                </div>
            </div>
        )
    }
}

export default ProductItem;