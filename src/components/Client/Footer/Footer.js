import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { footerShow } from "../../../services/adminServer";

function Footer(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const footerShowData = async () => {
      const dataInfor = await footerShow();

      if (dataInfor) {
        setData(dataInfor.DT);
      }
    };

    footerShowData();
  }, []);

  return (
    <footer className="mt-5">
      <div className="row">
        {data && (
          <div className="about col col-lg-12">
            <h4>{data.name}</h4>
            <div className="border mb-3"></div>
            <div className="d-flex">
              <p>{data.content}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
