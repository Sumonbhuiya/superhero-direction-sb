import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, write, born, country, amount, img } = props.book;
    return (
        <div className='writer-display'>
            <div>
                {/* display api data  */}
                <img src={img} alt="" />
                <div className='writer-details'>
                    <ul>
                        <li><span>Name:</span> {name}</li>
                        <li><span>Book:</span> {write}</li>
                        <li><span>Born:</span> {born}</li>
                        <li><span>Country:</span> {country}</li>
                        <li><span>Cost:</span> ${amount.toFixed(2)}</li>
                    </ul>
                </div>
                {/* hire button  */}
                <button
                    onClick={() => props.handlelToCart(props.book)}
                    className='order-button'><FontAwesomeIcon icon={faShoppingCart} />
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Book;