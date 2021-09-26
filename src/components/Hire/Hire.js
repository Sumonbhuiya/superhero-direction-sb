import React, { useEffect, useState } from 'react';
import Book from '../Books/Book';
import Cart from '../Cart/Cart';
import './Hire.css';

const Hire = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    // load fake data 
    useEffect(() => {
        fetch('./bookdata.JSON')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    // add cart button event handeler 
    const handelToCart = (bookdata) => {
        if (!cart.includes(bookdata)) {
            const newCart = [...cart, bookdata];
            setCart(newCart);
        }
    }
    return (
        <div>
            {/* body part  */}
            <div className='shop-container'>
                <div className="book-container">
                    {
                        books.map(bookdata => <Book
                            key={bookdata.key}
                            book={bookdata}
                            handlelToCart={handelToCart}
                        ></Book>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Hire;