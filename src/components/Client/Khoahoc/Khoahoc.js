import React, { useEffect, useState } from "react";
import { productGet } from "../../../services/clientServer";
import "./Khoahoc.scss";

function Khoahoc(props) {
  const [rawData, setRawData] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const data = await productGet();
      if (data) {
        setRawData(data.DT);
      }
    };

    getProduct();
  });

  return (
    <>
      <div className="container">
        {rawData &&
          rawData.map((item, index) => (
            <div className="products">
              <div className="products-item" key={index}>
                <img src={item.img} alt=""></img>
                <h3>{item.name}</h3>
                <p className="price">
                  {item.price === "0000" ? "Giá liên hệ" : item.price}
                </p>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Khoahoc;
