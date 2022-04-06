import React from "react";

import CardItem from "./cardItem";

export default function cardList() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <CardItem />
        </div>
      </div>
    </div>
  );
}
