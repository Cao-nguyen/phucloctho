import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import RegisterMiddleware from "../../../middlewares/RegisterMiddleware";
import "./Register.scss";

function Register({ toggleRegister }) {
  const {
    showPassword,
    fullName,
    email,
    username,
    password,
    confirmPassword,
    togglePasswordVisibility,
    setFullName,
    setEmail,
    setUsername,
    setPassword,
    setConfirmPassword,
    handleRegister,
    isLoading,
  } = RegisterMiddleware(toggleRegister);

  return (
    <div className="register-bg">
      <div className="register-form">
        <h1 className="text">ĐĂNG KÝ</h1>
        <div className="form-content">
          <InputGroup className="form-input">
            <Form.Control
              placeholder="Họ và tên*"
              aria-label="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
          </InputGroup>
          <InputGroup className="form-input">
            <Form.Control
              placeholder="Email*"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
          </InputGroup>
          <InputGroup className="form-input">
            <Form.Control
              placeholder="Username*"
              aria-label="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
          </InputGroup>
          <InputGroup className="form-input">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu*"
              aria-label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
            <InputGroup.Text
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </InputGroup.Text>
          </InputGroup>
          <InputGroup className="form-input">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu*"
              aria-label="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
            <InputGroup.Text
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </InputGroup.Text>
          </InputGroup>
          <Button
            className="form-button"
            type="submit"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                <i className="fa-solid fa-spinner fa-spin"></i> Đang xử lý...
              </span>
            ) : (
              "Đăng ký"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
