import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Editor from "../../Service/Editor";
import { blogPost } from "../../../services/adminServer";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handlePush = async () => {
    const data = await blogPost(name, content);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/admin/blog");
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <div className="admin">
      <div className="p-3 shadow-sm">
        <div className="top">
          <div className="btn btn-info mx-2" onClick={handleBack}>
            Trở về
          </div>
        </div>
        <h3 className="text-center text-primary">Tạo sản phẩm mới</h3>
        <div className="form-group mt-3">
          <label className="fw-bold fs-5">Tên bài viết*</label>
          <input
            className="form-control mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="fw-bold fs-5 mt-3">Nội dung bài viết*</label>
          <div className="mt-2">
            <Editor value={content} onChange={setContent} />
          </div>
        </div>
        <div className="btn btn-success" onClick={handlePush}>
          Lưu bài viết
        </div>
      </div>
    </div>
  );
};

export default Create;
