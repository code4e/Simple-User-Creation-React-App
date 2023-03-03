import React from 'react';
import User from './User';
import Card from '../UI/Card';
import './UsersList.css';

const UsersList = ({ users }) => {
  return (
    <Card>
        <ul className='users-list'>
            {
              users.map(user => <User name={user.name} age={user.age} key={user.id}/>)
            }
        </ul>
    </Card>
  )
}

export default UsersList