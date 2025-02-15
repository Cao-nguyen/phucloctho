import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import HandleLogout from "../../../middlewares/LogoutMiddleware";
import logo from "../../../assets/logo.png";
import "./Header.scss";

function Header({ toggleLogin, isDarkMode, toggleTheme }) {
  const tokenUser = useSelector((state) => state.user.account.tokenUser);
  const fullName = useSelector((state) => state.user.account.fullName);
  const role = useSelector((state) => state.user.account.role);

  const { Logout } = HandleLogout();

  return (
    <>
      <div className="laptop">
        <Nav className="nav" variant="pills">
          <div className="nav-logo">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="d-flex nav-item">
            <Nav.Item className="nav-links">
              <Nav.Link className="nav-link" as={NavLink} to="/" eventKey="/">
                Trang chủ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links">
              <Nav.Link
                className="nav-link"
                as={NavLink}
                to="/gioithieu"
                eventKey="/gioithieu"
              >
                Giới thiệu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links">
              <Nav.Link
                className="nav-link"
                as={NavLink}
                to="/sanpham"
                eventKey="/sanpham"
              >
                Sản phẩm
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links">
              <Nav.Link
                className="nav-link"
                as={NavLink}
                to="/blog"
                eventKey="/blog"
              >
                Bài viết
              </Nav.Link>
            </Nav.Item>
          </div>
          <div className="d-flex nav-mb">
            <Nav.Item className="nav-links">
              <Nav.Link>
                <i
                  className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}
                  onClick={toggleTheme}
                ></i>
              </Nav.Link>
            </Nav.Item>
            {tokenUser === "" ? (
              <Nav.Item className="nav-links nav-last">
                <Nav.Link
                  className="nav-link"
                  as={NavLink}
                  onClick={toggleLogin}
                >
                  Đăng nhập
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Dropdown>
                <Dropdown.Toggle as="div" className="custom-dropdown-toggle">
                  <div className="greeting">Xin chào</div>
                  <div className="user-name">{fullName}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {role === "admin" && (
                    <Dropdown.Item>
                      <NavLink className="dropdown-link" to="/admin/infor">
                        Trang quản trị
                      </NavLink>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item>
                    <NavLink className="dropdown-link-logout" onClick={Logout}>
                      Đăng xuất
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Nav>
      </div>

      <div className="mobile">
        <div className="d-flex nav-mb">
          <div className="nav-logo"></div>
          <div className="d-flex nav-item">
            <i
              className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}
              onClick={toggleTheme}
            ></i>
            <i className="fa-solid fa-bell"></i>
            {tokenUser === "" ? (
              <NavLink clasName="links" onClick={toggleLogin}>
                Đăng nhập
              </NavLink>
            ) : (
              <Dropdown>
                <Dropdown.Toggle as="div" className="custom-dropdown-toggle">
                  <div className="greeting">Xin chào</div>
                  <div className="user-name">{fullName}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/profile">
                      Trang cá nhân
                    </NavLink>
                  </Dropdown.Item>
                  {role === "admin" && (
                    <Dropdown.Item>
                      <NavLink className="dropdown-link" to="/admin/dashboard">
                        Trang quản trị
                      </NavLink>
                    </Dropdown.Item>
                  )}
                  {role === "teacher" && (
                    <Dropdown.Item>
                      <NavLink className="dropdown-link" to="/quanly">
                        Trang quản lý
                      </NavLink>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/khoahoc">
                      Khoá học của tôi
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/khuvuon">
                      Khu vườn trên mây
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/post">
                      Viết Blog
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/blog">
                      Blog của tôi
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/loveblog">
                      Blog yêu thích
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <NavLink className="dropdown-link" to="/me/settings">
                      Cài đặt
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="dropdown-link-logout" onClick={Logout}>
                      Đăng xuất
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>

        <div className="nav-mb-bot">
          <NavLink className="bot-item" to="/">
            <i className="fa-solid fa-home"></i>
          </NavLink>
          <NavLink className="bot-item" to="/gioithieu">
            <i className="fa-solid fa-circle-info"></i>
          </NavLink>
          <NavLink className="bot-item" to="/khoahoc">
            <i className="fa-solid fa-book"></i>
          </NavLink>
          <NavLink className="bot-item" to="/luyentap">
            <i className="fa-solid fa-code"></i>
          </NavLink>
          <NavLink className="bot-item" to="/diendan">
            <i className="fa-solid fa-user-group"></i>
          </NavLink>
          <NavLink className="bot-item" to="/blog">
            <i className="fa-solid fa-blog"></i>
          </NavLink>
          <NavLink className="bot-item" to="/sukien">
            <i className="fa-solid fa-calendar-days"></i>
          </NavLink>
          <NavLink className="bot-item" to="/tintuc">
            <i className="fa-solid fa-newspaper"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
