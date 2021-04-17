import React from "react";

import error404 from "../images/404-error-swing.png";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <img src={error404} alt="error 404" className="not-found" />
    </div>
  );
};

export default NotFoundPage;
