import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    if (active === "login") {
      setActive("signup");
    } else {
      setActive("login");
    }
  };
  return (
    <div className="authentication">
      <div className="auth__left"></div>
      <img
        src="https://miro.medium.com/v2/resize:fit:292/1*lIMxd2jMf-DnBNBDkRYYzA.png"
        alt="Instagram Logo"
      />
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
