import React from 'react';
import './iconComponent.css';
import { Link } from "react-router-dom";
 
function IconComp() {
    return <div id='icon-comp'>
        <Link to='/cart'>
        <i className="fas fa-shopping-cart"></i>
        <span className='badge badge-danger'>2</span>
        </Link>
    </div>
}

export default IconComp;