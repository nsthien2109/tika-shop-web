import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import InputText from "../../../components/InputTextAuth";
import welcomImg from "../../../assets/images/welcome.png";
import {login} from '../../../services/authRequest';
import {authMessageSelector } from '../../../redux/selector';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const message = useSelector(authMessageSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      email, password
    };
    login(userData, dispatch, navigate);
  }
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-content max-w-[540px] sm:max-w-[480px]">
          <div className="auth-header ">
            <div className="header-left">
              <p className="welcome-title">Welcome Back !</p>
              <p className="subtitle">Sign in to continue to Tika</p>
            </div>
            <div className="header-right">
              <img src={welcomImg} alt="" className="welcome-img" />
            </div>
          </div>
          <span className="logo">Tika</span>
          <div className="auth-form">
          <form onSubmit={handleLogin}>
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
            <div className="w-full form-input">
              <button className="w-full auth-button">Login</button>
            </div>
            <div className="w-full text-center suggest-register">
              <p className="text-center label-suggest">Sign up below button</p>
              <Link to="/register" className="text-center icon-register">
                <i className="ri-file-edit-line"></i>
              </Link>
            </div>
            </form>
          </div>
          <div className="w-full text-center forgot-password">
            <span className="forgot-password-content">
              <i className="ri-rotate-lock-line"></i> &nbsp; Forgot your
              password?
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
