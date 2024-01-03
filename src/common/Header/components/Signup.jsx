import React, { useState } from "react";
import {
  CloseIcon,
  EyeOffIcon,
  CheckIcon,
  CalenderIcon,
} from "../../../assets/index";
import { FiEye } from "react-icons/fi";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import DOBpicker from "./DOBpicker";

const Signup = ({ toggleUser, toggleSignIn }) => {
  const [seePassSUP, setSeePassSUP] = useState(false);
  const [seePassConfirm, setSeePassConfirm] = useState(false);

  const toggleSeePSsignup = () => setSeePassSUP(!seePassSUP);
  const toggleSeePSConfirm = () => setSeePassConfirm(!seePassConfirm);

  const validate = Yup.object().shape({
    firstName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .matches(/^[A-Za-z]+$/, "First Name cannot contain numbers")
      .required("First name is required"),
    lastName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Last name is required"),
    email: Yup.string().email("Email is Invalid").required("Email Required"),
    contact: Yup.string()
      .max(16, "Must be 16 digits or less")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "please input only number"
      )
      .required("Contact Number already registered"),
    dob: Yup.date().nullable().required("Date of Birth is required"),
    password: Yup.string()
      .max(8, "Password must be at least 8 characters")
      .oneOf([Yup.ref("confirmPassword"), null], "Password is not match")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is not match")
      .required("Password is required"),
    updateCheck: Yup.bool().oneOf([true], "Required"),
    termsCheck: Yup.bool().oneOf([true], "Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        dob: "",
        gender: "female",
        password: "",
        confirmPassword: "",
        updateCheck: false,
        termsCheck: false,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // console.log(values);
        alert("Success!" + JSON.stringify(values, null, 4));
        return false;
      }}
    >
      {(formik) => (
        <div className="createOverlay">
          {console.log("form", formik)}
          {console.log("values", formik.values)}
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
            <Form className="signUp-form" id="signUp-form">
              <div className="signUpForm-wrap">
                <div className="form-wrapName">
                  <div className="flex-form">
                    <div className="name-wrap">
                      <label htmlFor="firstName" className="nameLab">
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        autoComplete="off"
                        placeholder="ex: john"
                        className={
                          formik.touched.firstName && formik.errors.firstName
                            ? "input-signUp errorInput"
                            : "input-signUp"
                        }
                      />
                    </div>
                    <div className="name-wrap">
                      <label htmlFor="lastName" className="nameLab">
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        autoComplete="off"
                        placeholder="ex: john"
                        className={
                          formik.touched.lastName && formik.errors.lastName
                            ? "input-signUp errorInput"
                            : "input-signUp"
                        }
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    component="div"
                    className="error-message"
                    name="firstName"
                  />
                  <ErrorMessage
                    component="div"
                    className="error-message"
                    name="lastName"
                  />
                </div>
                <div className="form-wrap">
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="ex: johndoe@email.com"
                  />
                </div>
                <div className="form-wrap">
                  <TextField
                    label="Contact"
                    name="contact"
                    type="tel"
                    placeholder="ex: +62812 3456 7890"
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="dob" className="loginLab">
                    Date of Birth
                  </label>
                  <div className="inputDOB">
                    <span className="date-icon">
                      <img
                        src={CalenderIcon}
                        alt="calender-icon"
                        className="date-img"
                      />
                    </span>
                    <DOBpicker />
                  </div>
                  <ErrorMessage
                    component="div"
                    className="error-message"
                    name="dob"
                  />
                </div>
                <div className="form-wrap">
                  <div className="genderTitle">Gender</div>
                  <div className="gender-flex">
                    <div className="genderWrap">
                      <Field
                        name="gender"
                        type="radio"
                        id="genderFemale"
                        value="female"
                        className="signupGender"
                      />
                      <label htmlFor="genderFemale" className="genderLab">
                        <div className="genderBox"></div>
                        <div className="genderText">Female</div>
                      </label>
                    </div>
                    <div className="genderWrap">
                      <Field
                        name="gender"
                        id="genderMale"
                        type="radio"
                        value="male"
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
                  <label htmlFor="passSignUp" className="loginLab">
                    Password
                  </label>
                  <Field
                    name="password"
                    autoComplete="off"
                    type={seePassSUP ? "text" : "password"}
                    placeholder="ex: ****** "
                    className={
                      formik.touched.password && formik.errors.password
                        ? "loginInput errorInput"
                        : "loginInput"
                    }
                  />
                  <span className="see-pass" onClick={toggleSeePSsignup}>
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
                  </span>
                </div>
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="password"
                />
                <div className="form-wrap">
                  <label htmlFor="passConfirm" className="loginLab">
                    Confirm Password
                  </label>
                  <Field
                    name="confirmPassword"
                    autoComplete="off"
                    type={seePassConfirm ? "text" : "password"}
                    placeholder="ex: ****** "
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "loginInput errorInput"
                        : "loginInput"
                    }
                  />
                  <span className="see-pass" onClick={toggleSeePSConfirm}>
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
                  </span>
                </div>
                <ErrorMessage
                  component="div"
                  className="error-message"
                  name="confirmPassword"
                />
              </div>
              <div className="form-wrap">
                <div className="signUp-checkWrap">
                  <Field
                    type="checkbox"
                    name="updateCheck"
                    id="updateCheck"
                    className="check-signUp"
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
                      Send me Artsy Collective new arrival updates, offers, and
                      more.
                    </span>
                  </label>
                </div>
                <div className="signUp-checkWrap">
                  <Field
                    type="checkbox"
                    name="termsCheck"
                    id="termsCheck"
                    className="check-signUp"
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
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a className="signUp-termsLink" href="/">
                        Privacy Policy.
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="register__signUpWrap">
                <button
                  className={
                    formik.isValid && Object.keys(formik.touched).length > 0
                      ? "enableLoginBtn"
                      : "login-btn"
                  }
                  id="createAcc"
                  type="submit"
                >
                  Create Account
                </button>
                <div className="signIn-wrap">
                  Already have accout?{" "}
                  <button className="signUp-link" onClick={toggleSignIn}>
                    Sign In
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
