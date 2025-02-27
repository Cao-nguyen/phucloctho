import axios from "axios";

// API quên mật khẩu
export const blogGet = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/blogGet`
  );
  return response.data;
};

export const productGet = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/productGet`
  );
  return response.data;
};

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
