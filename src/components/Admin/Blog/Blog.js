import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogDelete, blogGet } from "../../../services/adminServer";
import { toast } from "react-toastify";

function Products(props) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/admin/blog/create");
  };

  const [rawData, setRawData] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const data = await blogGet();
      if (data) {
        setRawData(data.DT);
      }
    };

    getProduct();
  }, []);

  const handleRefresh = async () => {
    const data = await blogGet();
    if (data) {
      setRawData(data.DT);
    }
  };

  const handleDelete = async (id) => {
    const data = await blogDelete(id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleRefresh();
    } else {
      toast.error(data.EM);
    }
  };

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
      {rawData &&
        rawData.map((item, index) => (
          <div className="mx-2 mt-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên bài viết</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>
                    <div
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Xoá
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </>
  );
}

export default Products;
