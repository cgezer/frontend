// UserPage.js
import React from 'react';
import ProfileCard from '../components/ProfileCard';

const UserPage = props => {

  return (
    <div className='container'>
      <ProfileCard /> {/* Kullanıcı adını ProfileCard bileşenine iletin */}
    </div>
  );
};

export default UserPage;

