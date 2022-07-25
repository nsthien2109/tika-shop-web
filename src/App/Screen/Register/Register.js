import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../../../components/InputTextAuth";
import welcomImg from "../../../assets/images/welcome.png";
import {register} from '../../../services/authRequest';
import {authMessageSelector } from '../../../redux/selector';


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const message = useSelector(authMessageSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      role : 'user'
    };
    register(userData, dispatch, navigate);
  }


  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-content max-w-[540px] sm:max-w-[480px]">
          <div className="auth-header ">
            <div className="header-left">
              <p className="welcome-title">Free Register</p>
              <p className="subtitle">Get your free Tika account now.</p>
            </div>
            <div className="header-right">
              <img src={welcomImg} alt="" className="welcome-img" />
            </div>
          </div>
          <span className="logo">Tika</span>
          <div className="auth-form">
          <form onSubmit={handleRegister}>
            <InputText
              label="Firt name"
              type="text"
              placeholder="Enter your first name"
              onChange={(event) => setFirstName(event.target.value)}
            />
            <InputText
              label="Last name"
              type="Last name"
              placeholder="Enter your last name"
              onChange={(event) => setLastName(event.target.value)}
            />
            <InputText
              label="Phone number"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(event) => setPhone(event.target.value)}
            />
            <InputText
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputText
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="text-center text-red-600 text-xs font-semibold ">{!message ? '' : message}</div>
            <div className="w-full mt-3 form-input">
              <button className="w-full auth-button">Sign up</button>
            </div>
            <div className="w-full text-center suggest-register">
              <p className="text-center label-suggest">Sign in below button</p>
              <Link to="/login" className="text-center icon-register">
                <i className="ri-login-box-fill"></i>
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
