import React from 'react';
import UserCard from '../usercard/usercard';
import './usercardlist.css';

function UserCardList({allusers,handleUserDelete}) {
    return (
        <div className="users-list">
            {
                allusers.map(user => {
                    return (
                        <UserCard 
                        key={user.id} 
                        {...user}
                        handleUserDelete={handleUserDelete}
                        />
                    )
                })
            }
        </div>
    );
}


export default UserCardList;