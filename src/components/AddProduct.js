import React, {Component} from 'react';
import './AddProduct.css';

class AddProduct extends Component{
    onAddProduct(event){
        event.preventDefault();
        let title = event.target["title"].value;
        let price = event.target["price"].value;

        let product = {
            title:title,
            price:price
        }
        let products = JSON.parse(localStorage.getItem("lsc-products"));
        if(!products){
            products = [];
        }
        products.push(product);
        localStorage.setItem("lsc-products", JSON.stringify(products));
        console.log(products);
    }

    render(){
        return(
            <section className="invite">
                <h2>Local Storage-array</h2>
                <form className="ClassName"onSubmit={this.onAddProduct}>
                <p className="title"><input type="text" name="title" placeholder="Enter Title"/></p>
                <p className="price"><input type="text" name="price" placeholder="Enter Price"/></p>
                    <p className="btn"><button>Add Product</button></p>
                </form>
            </section>
        );
    }
}

export default AddProduct;