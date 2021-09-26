import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // header part 
        <div className='header'>
            <p className='heading-hire'>To Hire Some Writers!</p>
            <p className='heading-info'>If you want to hire some writers, then you need to checkout this.</p>
            <p className='heading-budget'>Total Budget: <span className='amount'>$60000</span></p>
        </div>
    );
};

export default Header;