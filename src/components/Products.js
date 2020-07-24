import React, {Component} from 'react';
import ProductItem from './ProductItem';

class Products extends Component{
    constructor(){
        super();
        this.products = JSON.parse(localStorage.getItem("lsc-products"));
        if(!this.products){
            this.products = [];
        }
    }

    onItemClick(item){
        return(event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if(!cart){
                cart = [];
            }

            let oldItem = cart.find((element) => element.title == item.title);
            if(oldItem){
                oldItem.quantity +=1;
            }else{
                item.quantity = 1;
                cart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        } 
    }

    render() {
        return(
            <div>            
                {this.products.map((item)=> 
                    <ProductItem 
                       onItemClick={this.onItemClick(item)} 
                       item={item}/>
                )}
            </div>
        )
    }
}

export default Products;