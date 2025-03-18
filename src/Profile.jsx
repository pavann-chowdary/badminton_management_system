import React from 'react'
import {useLocation} from 'react-router-dom'

const Profile = () => {
    const location = useLocation();
    const { given_name, email } = location.state || {}; //if location.state is undefined, it becomes an empty object.
    
  return (
    <div>
        Profile
        <h1>
            {given_name}
        </h1>
        <h1>
            {email}
        </h1>
    </div>
  )
}

export default Profile