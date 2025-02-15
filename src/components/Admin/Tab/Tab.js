import React from "react";
import { NavLink } from "react-router-dom";
import "./Tab.scss";

const Tab = () => {
  return (
    <div className="tab">
      <div className="tab-items">
        <div className="tab-links">PHÚC LỘC THỌ</div>
      </div>

      <NavLink className="tab-item" to="/admin/infor">
        <div className="tab-icon">
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="tab-link">Giới thiệu</div>
      </NavLink>

      <NavLink className="tab-item" to="/admin/course">
        <div className="tab-icon">
          <i className="fa-solid fa-book"></i>
        </div>
        <div className="tab-link">Sản phẩm</div>
      </NavLink>

      <NavLink className="tab-item" to="/admin/blog">
        <div className="tab-icon">
          <i className="fa-solid fa-blog"></i>
        </div>
        <div className="tab-link">Bài viết</div>
      </NavLink>

      <NavLink className="tab-item" to="/admin/bins">
        <div className="tab-icon">
          <i class="fa-solid fa-trash"></i>
        </div>
        <div className="tab-link">Thùng rác</div>
      </NavLink>

      <NavLink className="tab-item" to="/admin/settings">
        <div className="tab-icon">
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className="tab-link">Cài đặt chung</div>
      </NavLink>
    </div>
  );
};

export default Tab;
