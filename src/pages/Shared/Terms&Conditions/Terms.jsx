import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia praesentium aliquid qui velit, repellat optio aliquam placeat? Aliquam, veniam?</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;