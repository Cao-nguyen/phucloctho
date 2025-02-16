import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { productPost } from "../../../services/adminServer";
import Editor from "../../Service/Editor";

const Create = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState();
  const [uploading, setUploading] = useState(false);
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.REACT_APP_CLOUD_PRESET;

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !productPrice) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    let imageUrl = "";

    if (image) {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
        imageUrl = response.data.secure_url; // Lưu URL ảnh sau khi tải lên
      } catch (error) {
        console.error("Upload failed:", error);
        toast.error("Tải ảnh thất bại!");
        return;
      } finally {
        setUploading(false);
      }
    }
    const data = await productPost(
      productName,
      productPrice,
      imageUrl,
      content
    );

    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/admin/course");
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <div className="admin">
      <Card className="p-3 shadow-sm">
        <div className="top">
          <Button className="btn btn-info mx-2" onClick={handleBack}>
            Trở về
          </Button>
        </div>
        <h3 className="text-center text-primary">Tạo sản phẩm mới</h3>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group mt-3 col-lg-6">
              <label className="form-label fw-bold fs-5">Tên sản phẩm*</label>
              <input
                className="form-control mt-1"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 col-lg-6">
              <label className="form-label fw-bold fs-5">Giá sản phẩm*</label>
              <input
                className="form-control mt-1"
                placeholder="Nhập 0000 để giá hiển thị là liên hệ*"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 col-lg-12">
              <label className="form-label fw-bold fs-5">
                Chọn ảnh sản phẩm*
              </label>
              <input
                type="file"
                className="form-control mt-1"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group mt-3 col-lg-12">
              <label className="form-label fw-bold fs-5">Mô tả sản phẩm*</label>
              <Editor value={content} onChange={setContent} />
            </div>
          </div>
          <div className="mt-3 text-center">
            <Button
              className="btn btn-success px-4"
              type="submit"
              disabled={uploading}
            >
              {uploading ? (
                <Spinner animation="border" size="sm" className="me-2" />
              ) : (
                "Lưu sản phẩm"
              )}
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Create;
