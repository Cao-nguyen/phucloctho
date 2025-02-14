import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterValidate } from "../validates/RegisterValidate";
import { ForgotValidate } from "../validates/ForgotValidate";
import { toast } from "react-toastify";
import { registerUser, forgotCheck } from "../services/clientServer";
import { Login } from "../rudex/Actions/userAction";

const RegisterMiddleware = (toggleRegister) => {
  // Thư viện
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ẩn/ hiện mật khẩu & Đếm ngược thời gian
  const [showPassword, setShowPassword] = useState(false);

  // Quản lí Sate
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ẩn hiện mật khẩu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Xử lí đăng ký
  const handleRegister = async () => {
    setIsLoading(true);
    let check = RegisterValidate(
      fullName,
      email,
      username,
      password,
      confirmPassword
    );
    if (check === true) {
      let data = await registerUser(fullName, email, username, password);
      if (data.EC === 0) {
        dispatch(Login(data));
        toast.success(data.EM);
        toggleRegister();
        navigate("/");
      } else {
        toast.error(data.EM);
      }
    }
    setIsLoading(false);
  };

  // Thay đổi mật khẩu
  const handleForgot = async () => {
    setIsLoading(true);
    let check = ForgotValidate(email, password, confirmPassword);
    if (check === true) {
      let data = await forgotCheck(email, password);
      if (data.EC === 0) {
        toast.success(data.EM);
      } else {
        toast.error(data.EM);
      }
    }
    setIsLoading(false);
  };

  return {
    showPassword,
    fullName,
    email,
    username,
    password,
    confirmPassword,
    setShowPassword,
    togglePasswordVisibility,
    setFullName,
    setEmail,
    setUsername,
    setPassword,
    setConfirmPassword,
    handleRegister,
    handleForgot,
    isLoading,
  };
};

export default RegisterMiddleware;
