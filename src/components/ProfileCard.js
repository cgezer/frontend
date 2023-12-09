import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Authentication } from "../shared/AuthenticationContext";

const ProfileCard = () => {
  const navigate = useNavigate();
  const { username: pathUsername } = useParams();
  const value = React.useContext(Authentication);
  const loggedInUsername = value.state.username;
  let message = "We cannot edit";

  if (pathUsername === loggedInUsername) {
    message = "We can edit";
  }

  return <div>{message}</div>;
};

export default ProfileCard;
