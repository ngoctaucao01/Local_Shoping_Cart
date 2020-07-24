import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct.js';
// import ProductItem from './components/ProductItem.js';
import Products from './components/Products';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:"products"
      
    }
    this.onProductsClicked = this.onProductsClicked.bind(this);
    // this.onAddProductsClicked = this.onAddProductClicked.bind(this);
  }

  onAddProductsClicked(){
    this.setState({
      menu: "add-productx "
    })
  }
  onProductsClicked(){
    this.setState({
      menu: "add-product"
    })
  }

  render() {
    return (
      <div>
        <div className="Menu">
          <button onClick={this.onProductsClicked}>Products</button>
        </div>
        {this.state.menu == "products" ? <Products/> : null}
        {this.state.menu == "add-products" ? <AddProduct/> : null}

        <AddProduct/>
        <Products/>
      </div>
    );
  }
}

export default App;