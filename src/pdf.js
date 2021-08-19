import React from "react";

export default function PDF() {
  return (
    <object
      data="https://drive.google.com/file/d/1Sgfeb8jggsmJ2nURmq8hNbV3uBT7CEIa"
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <p>
        Click here{" "}
        <a href="https://drive.google.com/file/d/1Sgfeb8jggsmJ2nURmq8hNbV3uBT7CEIa">
          to download the PDF!
        </a>
      </p>
    </object>
  );
}
