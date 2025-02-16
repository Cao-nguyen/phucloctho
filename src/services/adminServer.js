import axios from "axios";

// [DELETE] Bài viết
export const blogDelete = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/blog/delete`,
    {
      id,
    }
  );
  return response.data;
};

// [GET] Bài viết
export const blogGet = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/blog/get`
  );
  return response.data;
};

// [POST] Bài viết
export const blogPost = async (name, content) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/blog/post`,
    {
      name,
      content,
    }
  );
  return response.data;
};

// [PATCH] Delete
export const DeleteBinsNews = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/bins/news/delete`,
    { id }
  );
  return response.data;
};

// [PATCH] PatchBinNews
export const PatchBinsNews = async (id) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND}/api/v1/bins/news/patch`,
    { id }
  );
  return response.data;
};

// [GET] BinsNews
export const BinsNews = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/bins/news`
  );
  return response.data;
};

// [POST] Sản phẩm
export const productPost = async (name, price, img, content) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/api/v1/products/post`,
    {
      name,
      price,
      img,
      content,
    }
  );
  return response.data;
};

// [GET] Sản phẩm
export const productGet = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/products/get`
  );
  return response.data;
};

// [GET] Sản phẩm
export const productDelete = async (id) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND}/api/v1/products/delete`,
    {
      id,
    }
  );
  return response.data;
};

// [PACTH] Footer
export const footerInfor = async (name, content) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND}/api/v1/footer`,
    {
      name,
      content,
    }
  );
  return response.data;
};

// [PACTH] Footer
export const footerShow = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/footerShow`
  );
  return response.data;
};

// [PATCH] Giới thiệu
export const InforApi = async (Infor) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_BACKEND}/api/v1/infor`,
    {
      Infor,
    }
  );
  return response.data;
};

// [GET] Giới thiệu
export const getInforApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/v1/infor`
  );
  return response.data;
};
