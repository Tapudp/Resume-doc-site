import React from "react";
import DocViewer from "./doc.js";
import PDF from "./pdf.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Divyesh Parmar resume site:</h1>
      <DocViewer />
      <PDF />
    </div>
  );
}
