import React from 'react';
import Card from '../UI/Card';
import './User.css';


const User = ({name, age}) => {
    return (
        <li className='user'>
            <p>
                {name} ({age} years old)
            </p>
        </li>
    )
}

export default User;