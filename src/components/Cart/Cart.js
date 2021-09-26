import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // for calculate cart dara 
    let total = 0;
    let quantity = 0;
    for (const writer of cart) {
        total += writer.amount;
        quantity += 1;
    }

    return (
        <div>
            <h3 className='cart-heading'>Order Summery</h3>
            {/* showing cart data  */}
            <h6>Order Quantity: <span className='cart-quantity'>{quantity}</span></h6>
            <h6>Totao Cost: <span className='cart-total'>${total.toFixed(2)}</span></h6>
            <h5><span className='author-name'>Name</span>:
                {/* showinh author name  */}
                <div>
                    {
                        cart.map(writer => {
                            return (
                                <div className='cart-author' key={writer.key}>
                                    <ul>
                                        <li>{writer.name}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </h5>
        </div>
    );
};

export default Cart;