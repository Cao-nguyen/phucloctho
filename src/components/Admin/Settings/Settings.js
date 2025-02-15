import React, { useEffect } from "react";
import "./Settings.scss";

function Settings(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="admin">
      <h1 className="text-center text-primary">Cài đặt chung</h1>
    </div>
  );
}

export default Settings;
