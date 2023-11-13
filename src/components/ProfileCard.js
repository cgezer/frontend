// ProfileCard.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileCard = props => {
  const { username } = useParams();
  const loggedInUsername = props.username;
  console.log("profileCard-useParams-username",username);
    console.log("profileCard-Path-username",loggedInUsername);

  let message = "We can not edit";

  if (username === loggedInUsername) {
    message = "We can edit";
  }

  return (
    <div>{message}</div>
  );
};

export default ProfileCard;
