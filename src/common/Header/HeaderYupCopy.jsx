import React, { useState } from "react";
import "./header.scss";
import {
  CocoRing,
  CameliaBracelet,
  RubanCollection,
  CartIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  CareServiceMobileMenu,
  BridalMobileMenu,
  JewelryMobileMenu,
  CocoMobileMenu,
  CollectionMobileMenu,
  CalenderIcon,
  CheckIcon,
  EyeOffIcon,
} from "../../assets/index";
import { useForm } from "react-hook-form";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiEye } from "react-icons/fi";
import TextField from "./components/TextField";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(false);
  const [loginPass, setloginPass] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [seePassLogin, setseePassLogin] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [selectDob, setSelectDob] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [seePassSUP, setSeePassSUP] = useState(false);
  const [seePassConfirm, setSeePassConfirm] = useState(false);
  // const [FName, setFname] = useState("");
  // const [LName, setLname] = useState("");
  // const [emailSUP, setEmailSUP] = useState("");
  // const [contact, setContact] = useState("");
  // const [SUPpass, setSUPpass] = useState("");
  // const [SUPpassConfirm, setSUPpassConfirm] = useState("");

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    const screen = document.querySelector("body");
    if (mobileMenu === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleUser = () => {
    setUser(!user);
    setSignUp(false);
    const screen = document.querySelector("body");
    if (user === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleSignUp = () => {
    setSignUp(!signUp);
    const screen = document.querySelector("body");
    if (signUp === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleSignIn = () => {
    setSignUp(false);
    const screen = document.querySelector("body");
    if (signUp === false) {
      screen.classList.remove("mobileView");
    } else {
      screen.classList.add("mobileView");
    }
  };

  const selectDate = () => {
    setSelectDob(true);
  };

  const toggleDob = () => {
    setDob(new Date());
  };

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

  const toggleSeePSlogin = () => setseePassLogin(!seePassLogin);
  const toggleSeePSsignup = () => setSeePassSUP(!seePassSUP);
  const toggleSeePSConfirm = () => setSeePassConfirm(!seePassConfirm);

  const handleLoginBtn = () => {
    if (loginEmail.length > 0 && loginPass.length > 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First Name cannot contain numbers")
      .required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Email is Invalid").required("Email Required"),
    contact: Yup.string()
      .max(16, "Must be 16 digits or less")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "please input only number"
      )
      .required("Contact Number already registered"),
    dob: Yup.string()
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format DD-MM-YYYY"
      )
      .required("Date of Birth is required"),
    password: Yup.string()
      .max(8, "Password must be at least 8 characters")
      .oneOf([Yup.ref("password"), null], "Password is not match")
      .required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is not match")
      .required("Confirm password is Required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    alert("Success!" + JSON.stringify(data, null, 4));
    return false;
  };

  return (
    <div className="max-nav">
      <div className="fix-nav">
        <header className="nav">
          <div className="nav__head">
            <button
              className={mobileMenu ? "closeIcon" : "head-btn"}
              onClick={toggleMenu}
            >
              <img src={MenuIcon} alt="menu-icon" className="open" />
              <img src={CloseIcon} alt="x-icon" className="close" />
            </button>
            <a href="/" className="logo">
              Artsy Collective
            </a>
            <div className="head-desktop">
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Collections
                  </a>
                  <div className="dropdown">
                    <div className="comp-wrap">
                      <div className="comp">
                        <div className="shop-featured">
                          <h2 className="featured-title">Shop By Categories</h2>
                          <ul className="featured-ul">
                            <li className="featured-li">
                              <a className="featured-link" href="/product-list">
                                View All
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Rings
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Bracelets
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Necklaces
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Earings
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="shop-featured">
                          <h2 className="featured-title">
                            Featured Collections
                          </h2>
                          <ul className="featured-ul">
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Coco Crush
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Camélia
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Ultra
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Comète
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Ruban
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Baroque
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Soleil de Artsy
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="img-block">
                          <div className="image-nav">
                            <a href="/" className="navbtn-img">
                              <img
                                src={CocoRing}
                                alt="Coco Crush Ring"
                                className="nav-img"
                              />
                              Coco Crush Ring
                            </a>
                            <a href="/" className="navbtn-img pad">
                              <img
                                src={CameliaBracelet}
                                alt="Camélia Bracelet"
                                className="nav-img"
                              />
                              Camélia Bracelet
                            </a>
                            <a href="/" className="navbtn-img pad">
                              <img
                                src={RubanCollection}
                                alt="Ruban Collection"
                                className="nav-img"
                              />
                              Ruban Collection
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Coco Crush
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    High Jewelry
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Bridal
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Care & Services
                  </a>
                </div>
              </div>
            </div>
            <div className={mobileMenu ? "removeCartUser" : "head-cartUser"}>
              <button className="btn-user btn-cartUser">
                <img
                  className="icon"
                  src={CartIcon}
                  alt="cart-icon"
                  onClick={toggleUser}
                />
              </button>
              <button className="btn-cart btn-cartUser" id="btn-cart">
                <img className="icon" src={UserIcon} alt="user-icon" />
              </button>
            </div>
          </div>
          {mobileMenu ? (
            <div className="nav-menu">
              <a href="/product-list" className="link-menu">
                <div className="menu-item">
                  <h2 className="drop-title">Collections</h2>
                  <span className="drop-subtitle">
                    All Artsy’s fine jewelry
                  </span>
                </div>
                <img
                  className="drop-img"
                  src={CollectionMobileMenu}
                  alt="Collections"
                />
              </a>
              <a href="/" className="link-menu">
                <div className="menu-item">
                  <h2 className="drop-title">Coco Crush</h2>
                  <span className="drop-subtitle">
                    Special Coco Crush’s Edition
                  </span>
                </div>
                <img
                  className="drop-img"
                  src={CocoMobileMenu}
                  alt="Coco Crush"
                />
              </a>
              <a href="/" className="link-menu">
                <div className="menu-item">
                  <h2 className="drop-title">High Jewelry</h2>
                  <span className="drop-subtitle">
                    Artsy high jewelry signature
                  </span>
                </div>
                <img
                  className="drop-img"
                  src={JewelryMobileMenu}
                  alt="High Jewelry"
                />
              </a>
              <a href="/" className="link-menu">
                <div className="menu-item">
                  <h2 className="drop-title">Bridal</h2>
                  <span className="drop-subtitle">
                    Wedding, Engagement Rings
                  </span>
                </div>
                <img className="drop-img" src={BridalMobileMenu} alt="Bridal" />
              </a>
              <a href="/" className="link-menu">
                <div className="menu-item">
                  <h2 className="drop-title">Care & Services</h2>
                  <span className="drop-subtitle">Book an Appoinment</span>
                </div>
                <img
                  className="drop-img"
                  src={CareServiceMobileMenu}
                  alt="Care & Services"
                />
              </a>
            </div>
          ) : null}
        </header>
      </div>
      <div className={user ? "user-wrap" : "closeUser"}>
        <div
          className={signUp ? "register scrollSignUp" : "register hiddenScroll"}
        >
          {signUp ? (
            <div className="createOverlay">
              <div className="createAcc-wrap">
                <button className="close-signUp" onClick={toggleUser}>
                  <img
                    src={CloseIcon}
                    alt="close-btn"
                    className="close-imgRegister"
                  />
                </button>
                <h2 className="register-title">Create an Account</h2>
                <h3 className="register-sub">
                  Save your information to check out faster
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="signUp-form"
                  id="signUp-form"
                >
                  <div className="signUpForm-wrap">
                    <div className="form-wrapName">
                      <div className="flex-form">
                        <div className="name-wrap">
                          <label htmlFor="firstName" className="nameLab">
                            First Name
                          </label>
                          <input
                            {...register("firstName")}
                            type="text"
                            name="firstName"
                            id="firstName"
                            className={`input-signUp ${
                              errors.firstName ? "errorInput" : ""
                            }`}
                            placeholder="ex: john"
                          />
                        </div>
                        <div className="name-wrap">
                          <label htmlFor="lastName" className="nameLab">
                            Last Name
                          </label>
                          <input
                            {...register("lastName")}
                            type="text"
                            name="lastName"
                            id="lastName"
                            className={`input-signUp ${
                              errors.lastName ? "errorInput" : ""
                            }`}
                            placeholder="ex: doe"
                          />
                        </div>
                      </div>
                      <div className="error-message" id="errorFname">
                        {errors.firstName?.message}
                        {console.log("value", formOptions)}
                      </div>
                    </div>
                    <div className="form-wrap">
                      {/* <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="ex: johndoe@email.com"
                      /> */}
                      {/* <label htmlFor="emailSignUp" className="loginLab">
                            Email / Username
                          </label>
                          <input
                            type="email"
                            name="signUpUsername"
                            id="emailSignUp"
                            placeholder="ex: johndoe@email.com"
                            className="loginInput"
                          /> */}
                      {/* <div className="error-message" id="errorEmail">
                            Email is not valid
                          </div> */}
                    </div>
                    <div className="form-wrap">
                      {/* <TextField
                        label="Contact"
                        name="contact"
                        type="tel"
                        placeholder="ex: +62812 3456 7890"
                      /> */}
                      {/* <label htmlFor="contactSignUp" className="loginLab">
                            Contact
                          </label>
                          <input
                            type="tel"
                            name="signUpContact"
                            id="contactSignUp"
                            placeholder="ex: +62812 3456 7890"
                            className="loginInput"
                          /> */}
                      {/* <div className="error-message" id="errorContact">
                            Contact Number already registered
                          </div> */}
                    </div>
                    <div className="form-wrap">
                      {/* <TextField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        placeholder="dd/mm/yyyy"
                      /> */}
                      {/* <label htmlFor="dobSignUp" className="loginLab">
                            Date of Birth
                          </label> */}
                      {/* <div>
                            <DatePicker
                              selected={dob}
                              onChange={(date) => setDob(date)}
                              dateFormat="dd/mm/yyyy"
                            />
                          </div> */}
                      {/* <div
                            className="inputDOB"
                            id="dobBox"
                            onClick={selectDate}
                          >
                            <span className="date-icon">
                              <img
                                src={CalenderIcon}
                                alt="calender-icon"
                                className="date-img"
                              />
                            </span>
                            {selectDob ? (
                              <div className="picker-wrap">
                                <DatePicker
                                  selected={dob}
                                  onSelected={toggleDob}
                                  onChange={(date) => setDob(date)}
                                  dateFormat="dd/MM/yyyy"
                                  className="date-react"
                                />
                              </div>
                            ) : (
                              // <input
                              //   type="text"
                              //   placeholder="DD/MM/YYYY"
                              //   name="signUpdob"
                              //   className="date-inputDOB"
                              // />
                              <div className="date-inputDOB">DD/MM/YYYY</div>
                            )}
                            </div> */}
                      {/* <div className="error-message" id="errorDob">
                            Date of Birth is not valid
                          </div> */}
                    </div>
                    <div className="form-wrap">
                      <div className="genderTitle">Gender</div>
                      <div className="gender-flex">
                        <div className="genderWrap">
                          <input
                            type="radio"
                            name="signUpGender"
                            id="genderFemale"
                            className="signupGender"
                            checked
                          />
                          <label htmlFor="genderFemale" className="genderLab">
                            <div className="genderBox"></div>
                            <div className="genderText">Female</div>
                          </label>
                        </div>
                        <div className="genderWrap">
                          <input
                            type="radio"
                            name="signUpGender"
                            id="genderMale"
                            className="signupGender"
                          />
                          <label htmlFor="genderMale" className="genderLab">
                            <div className="genderBox"></div>
                            <div className="genderText">Male</div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-wrap">
                      {/* <TextField
                        label="Password"
                        name="password"
                        type={seePassSUP ? "text" : "password"}
                        placeholder="ex: ****** "
                      /> */}
                      {/* <label htmlFor="passSignUp" className="loginLab">
                            Password
                          </label>
                          <input
                            type="password"
                            name="signUpPass"
                            id="passSignUp"
                            placeholder="ex: ****** "
                            className="loginInput"
                          /> */}
                      {/* <span className="see-pass" onClick={toggleSeePSsignup}>
                        {seePassSUP ? (
                          <FiEye />
                        ) : (
                          <img
                            src={EyeOffIcon}
                            alt=""
                            className="hidePass"
                            id="hide-seeSignUp"
                          />
                        )}
                      </span> */}
                    </div>
                    {/* <div className="error-message" id="errorPass">
                          Password is not match
                        </div> */}
                    <div className="form-wrap">
                      {/* <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type={seePassConfirm ? "text" : "password"}
                        placeholder="ex: ****** "
                      /> */}
                      {/* <label htmlFor="passConfirm" className="loginLab">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="ConfirmPass"
                            id="passConfirm"
                            placeholder="ex: ****** "
                            className="loginInput"
                          /> */}
                      {/* <span className="see-pass" onClick={toggleSeePSConfirm}>
                        {seePassConfirm ? (
                          <FiEye />
                        ) : (
                          <img
                            src={EyeOffIcon}
                            alt=""
                            className="hidePass"
                            id="hide-seeConfirm"
                          />
                        )}
                      </span> */}
                    </div>
                    {/* <div className="error-message" id="errorPassConfirm">
                          Password is not match
                        </div> */}
                  </div>
                  <div className="form-wrap">
                    <div className="signUp-checkWrap">
                      <input
                        type="checkbox"
                        name="checkUpdate"
                        id="updateCheck"
                        className="check-signUp"
                        value="Send me Artsy Collective new arrival updates, offers, and
                        more"
                      />
                      <label
                        htmlFor="updateCheck"
                        id="updateLab"
                        className="label-update"
                      >
                        <div className="box-checkSUp">
                          <img className="box-check" src={CheckIcon} alt="" />
                        </div>
                        <span className="label-itemCheck">
                          Send me Artsy Collective new arrival updates, offers,
                          and more.
                        </span>
                      </label>
                    </div>
                    <div className="signUp-checkWrap">
                      <input
                        type="checkbox"
                        name="checkTerms"
                        id="termsCheck"
                        className="check-signUp"
                        value="I agree to Artsy Collective Terms & Conditions and Privacy Policy"
                      />
                      <label
                        htmlFor="termsCheck"
                        id="termsLab"
                        className="label-update"
                      >
                        <div className="box-checkSUp">
                          <img className="box-check" src={CheckIcon} alt="" />
                        </div>
                        <span className="label-itemCheck">
                          I agree to Artsy Collective{" "}
                          <a className="signUp-termsLink" href="/">
                            Terms & Conditions and Privacy Policy.
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="register__signUpWrap">
                    <button className="enableLoginBtn" id="createAcc" type="submit">
                      Create Account
                    </button>
                    <div className="signIn-wrap">
                      Already have accout?{" "}
                      <button className="signUp-link" onClick={toggleSignIn}>
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
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
                  <h3 className="register-sub">
                    Sign in with your email and password
                  </h3>
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
                          // <i className="icon-eye">
                          //   <FiEye />
                          // </i>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
