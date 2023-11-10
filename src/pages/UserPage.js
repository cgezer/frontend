import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { username } = useParams(); // useParams ile username'i alın

  return (
    <div className='container'>
      <ProfileCard username={username} /> {/* Kullanıcı adını ProfileCard bileşenine iletin */}
    </div>
  );
};

export default UserPage;