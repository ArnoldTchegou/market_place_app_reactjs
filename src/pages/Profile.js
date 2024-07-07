import React from "react";
import { useAuth } from "./Authenticate";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <p>Welcome {auth.user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
