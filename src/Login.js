import React from "react";
import UserForm from "./userForm";

const Login = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${require("./assets/bg.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default Login;
