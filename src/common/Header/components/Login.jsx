import React, { useState } from "react";
import { CloseIcon, EyeOffIcon } from "../../../assets/index";
import { FiEye } from "react-icons/fi";

const Login = ({toggleUser, toggleSignUp}) => {
  const [loginPass, setloginPass] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [seePassLogin, setseePassLogin] = useState(false);
  const [login, setLogin] = useState(false);

  const handleEmailLogin = (e) => {
    setloginEmail(e.target.value);
    console.log(loginEmail);
    console.log(loginEmail.length);
  };

  const handlePassLogin = (e) => {
    setloginPass(e.target.value);
    console.log(loginPass);
    console.log(loginPass.length);
  };

  const handleLoginBtn = () => {
    if (loginEmail.length > 0 && loginPass.length > 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const toggleSeePSlogin = () => setseePassLogin(!seePassLogin);

  return (
    <div className="LoginOverlay">
      <div className="login-wrap">
        <div className="register__loginWrap">
          <button className="close-register" onClick={toggleUser}>
            <img
              src={CloseIcon}
              alt="close-btn"
              className="close-imgRegister"
            />
          </button>
          <h2 className="register-title">Welcome Back</h2>
          <h3 className="register-sub">Sign in with your email and password</h3>
          <form
            className="register-form"
            id="loginFormInput"
            onInput={handleLoginBtn}
          >
            <div className="form-wrap">
              <label htmlFor="usernameLogin" className="loginLab">
                Email / Username
              </label>
              <input
                type="email"
                name="username"
                id="usernameLogin"
                placeholder="ex: johndoe@email.com"
                className="loginInput"
                value={loginEmail}
                onInput={handleEmailLogin}
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="passLogin" className="loginLab">
                Password
              </label>
              <input
                type={seePassLogin ? "text" : "password"}
                name="password"
                id="passLogin"
                placeholder="ex: ****** "
                className="loginInput"
                value={loginPass}
                onInput={handlePassLogin}
              />
              <span className="see-pass" onClick={toggleSeePSlogin}>
                {seePassLogin ? (
                  <FiEye />
                ) : (
                  <img
                    src={EyeOffIcon}
                    alt="seePass"
                    className="hidePass"
                    id="hide-seePass"
                  />
                )}
              </span>
            </div>
            <button className="forget-pass">Forgot Password</button>
          </form>
        </div>
        <div className="register__bottomWrap">
          <button
            className={login ? "enableLoginBtn" : "login-btn"}
            id="loginBtn"
            type="submit"
          >
            Login
          </button>
          <div className="signUp-wrap">
            New Customer?{" "}
            <button className="signUp-link" onClick={toggleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
