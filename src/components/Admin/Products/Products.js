import React from "react";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/admin/course/create");
  };

  const handleRefresh = () => {};

  return (
    <>
      <div className="top">
        <div className="btn btn-success mx-2" onClick={handleCreate}>
          Thêm mới
        </div>
        <div className="btn btn-primary mx-2" onClick={handleRefresh}>
          Tải lại
        </div>
      </div>
    </>
  );
}

export default Products;
