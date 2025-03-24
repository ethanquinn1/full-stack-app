
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      // If no user is registered, navigate to the register page
      navigate("/register");
    } else {
      // If a user exists, navigate to login
      navigate("/login");
    }
  }, [navigate]);

  return null; // Empty component, just handles redirects
};

export default Landing;
