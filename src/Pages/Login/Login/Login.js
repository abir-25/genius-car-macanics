import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="mt-5 pt-4">
      <button onClick={signInUsingGoogle} className="btn btn-success">
        Google Login
      </button>
    </div>
  );
};

export default Login;
