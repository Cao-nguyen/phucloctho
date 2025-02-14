import { toast } from "react-toastify";

export const ForgotValidate = (email, password, confirmPassword) => {
  if (!email) {
    toast.error("Vui lòng nhập email");
    return false;
  }

  let reg = /\S+@\S+\.\S+/;
  if (!reg.test(email)) {
    toast.error("Email bạn nhập không đúng định dạng");
    return false;
  }

  if (!password) {
    toast.error("Vui lòng nhập mật khẩu");
    return false;
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    toast.error(
      "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
    );
    return false;
  }

  if (confirmPassword !== password) {
    toast.error("Mật khẩu xác nhận không chính xác");
    return false;
  }

  return true;
};
