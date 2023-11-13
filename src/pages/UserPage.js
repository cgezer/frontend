// UserPage.js
import React from 'react';
import ProfileCard from '../components/ProfileCard';

const UserPage = (props) => {
  
    console.log("UserPage-username",props.username);
  return (
    <div className='container'>
      <ProfileCard username={props.username} /> {/* Kullanıcı adını ProfileCard bileşenine iletin */}
    </div>
  );
};

export default UserPage;

