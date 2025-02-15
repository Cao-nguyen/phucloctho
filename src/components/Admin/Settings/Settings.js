import React, { useEffect, useState } from "react";
import "./Settings.scss";
import { toast } from "react-toastify";
import { footerInfor, footerShow } from "../../../services/adminServer";

function Settings(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const footerShowData = async () => {
      const data = await footerShow();

      if (data) {
        setName(data.DT.name);
        setContent(data.DT.content);
      }
    };

    footerShowData();
  }, []);

  const [name, setName] = useState();
  const [content, setContent] = useState();

  const handlePush = async () => {
    if (!name || !content) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
    }

    let data = await footerInfor(name, content);

    if (data && data.EC === 0) {
      toast.success(data.EM);
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <div className="admin">
      <h1 className="text-center text-primary">Cài đặt chung</h1>
      <div className="form-group mt-3">
        <label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Tên website*
        </label>
        <input
          className="form-control mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Thông tin giới thiệu ngắn*
        </label>
        <textarea
          className="form-control mt-1"
          style={{ height: "200px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <button className="btn btn-primary" onClick={handlePush}>
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Settings;
