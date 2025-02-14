import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import RegisterMiddleware from "../../../middlewares/RegisterMiddleware";
import "./Forgot.scss";

function Forgot() {
  const {
    showPassword,
    email,
    password,
    confirmPassword,
    togglePasswordVisibility,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleForgot,

    isLoading,
  } = RegisterMiddleware();

  return (
    <div className="register-bg">
      <div className="register-form">
        <h1 className="text">QUÊN MẬT KHẨU</h1>
        <div className="form-content">
          <InputGroup className="form-input">
            <Form.Control
              placeholder="Email*"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleForgot();
                }
              }}
            />
          </InputGroup>
          <InputGroup className="form-input">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu mới*"
              aria-label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleForgot();
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
              placeholder="Xác nhận mật khẩu mới*"
              aria-label="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleForgot();
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
            onClick={handleForgot}
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                <i className="fa-solid fa-spinner fa-spin"></i> Đang xử lý...
              </span>
            ) : (
              "Lấy lại mật khẩu"
            )}
          </Button>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
