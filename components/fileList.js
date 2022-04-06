import React from "react";

import FileItem from "./fileItem";

export default function FileList() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <FileItem />
        </div>
      </div>
    </div>
  );
}
