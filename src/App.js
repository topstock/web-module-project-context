import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([ ...cart, item ])
		// add the given item to the cart
	};

	return (
		<div className='App'>
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>
				<Navigation />
			</CartContext.Provider>
		</ProductContext.Provider>

		{/* Routes */}
		
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>
				<Route exact path='/'>
					<Products />
				</Route>
			</CartContext.Provider>
		</ProductContext.Provider>

		<ProductContext.Provider value={{products}}>
			<CartContext.Provider value={{cart}}>	
				<Route path='/cart'>
					<ShoppingCart />	
				</Route>	
			</CartContext.Provider>
		</ProductContext.Provider>
	</div>
	);
}

export default App;
