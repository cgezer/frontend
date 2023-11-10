import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileCard = () => {
  const { username } = useParams(); // Kullanıcı adını useParams ile alın
  console.log("Username:", username); // Kullanıcı adını loglayın

  return (
    <div>
      <p>Username: {username}</p>
    </div>
  );
};

export default ProfileCard;