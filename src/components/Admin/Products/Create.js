import React from "react";
import { useNavigate } from "react-router-dom";

function Create(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="top">
        <div className="btn btn-info mx-2" onClick={handleBack}>
          Trở về
        </div>
      </div>
      <div>
        <h3 className="text-center text-primary">Tạo sản phẩm mới</h3>
      </div>
    </>
  );
}

export default Create;
