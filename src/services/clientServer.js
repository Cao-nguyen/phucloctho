import axios from "axios";

// API quên mật khẩu
export const forgotCheck = async (email, password) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND}/api/v1/forgot`,
    { email, password }
  );
  return response.data;
};

// API Đăng ký
export const registerUser = async (fullName, email, username, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/dangky`,
    {
      fullName,
      email,
      username,
      password,
    }
  );
  return response.data;
};

// API Đăng nhập
export const LoginUser = async (fullName, username, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/dangnhap`,
    {
      fullName,
      username,
      password,
    }
  );
  return response.data;
};
