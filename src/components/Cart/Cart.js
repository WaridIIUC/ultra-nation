import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    // cart.forEach(cartItem => {
    //     console.log("Population ", cartItem);
    //     totalPopulation = totalPopulation + cartItem.population;
    // });
    let totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);git init
    return (
        <div>
            <h4>Country added: {cart.length}</h4>
            <h4>Population: {totalPopulation}</h4>
        </div>
    );
};

export default Cart;