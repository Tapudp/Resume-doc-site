import React from "react";

const DocIframe = ({ source }) => {
  // if (!source) {
  //   return <div>Loading...</div>;
  // }
  const baseDoc = `https://docs.google.com/document/d/1z3I9N3u67HyEMerIx8ttJb3TYuNWB8pMoSSyek66Bgs/preview`;
  const finalDoc = `https://docs.google.com/viewer?url="${source}"&embedded=true`;
  // const src = source ? source : baseDoc ;
  return (
    <div>
      <iframe
        id="frame-id"
        src={source ? finalDoc : baseDoc}
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default DocIframe;
