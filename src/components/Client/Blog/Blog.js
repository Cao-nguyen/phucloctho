import React, { useEffect, useState } from "react";
import { blogGet } from "../../../services/clientServer";
import "./Blog.scss";
import { marked } from "marked";
import { Link } from "react-router-dom";

function Blog(props) {
  const [rawData, setRawData] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const data = await blogGet();
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
            <div className="blog">
              <div className="blog-item" key={index}>
                <Link to={item.slug}>
                  <h3>{item.title}</h3>
                </Link>
                <div
                  className={`preview`}
                  dangerouslySetInnerHTML={{
                    __html: marked(item.content.replace(/\n/g, "  \n") || ""),
                  }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Blog;
