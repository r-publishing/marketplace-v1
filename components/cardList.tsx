import React from "react";

import CardItem from "./cardItem";
import DummyCard from "./dummyCard";

export default function cardList() {
  return (
    <div className="bg-light">
      <div className="">
        <div className="row row-cols-sm-2 row-cols-md-3">
          <CardItem />
        
        </div>
      </div>
    </div>
  );
}
