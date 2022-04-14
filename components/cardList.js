import React from "react";

import CardItem from "./cardItem";
import DummyCard from "./dummyCard";

import img1 from "../public/placeholder.jpg";
import img2 from "../public/IMG_6437.jpg";
import img3 from "../public/IMG_6446.jpg";
import img4 from "../public/IMG_6440.jpg"

export default function cardList() {
  return (
    <div className="bg-light">
      <div className="">
        <div className="row row-cols-sm-2 row-cols-md-3">
          <DummyCard image={img1}/>
          <DummyCard image={img2}/>
          <DummyCard image={img3}/>
          <DummyCard image={img4}/>
        </div>
        <div className="row row-cols-sm-2 row-cols-md-3">
          <DummyCard image={img1}/>
          <DummyCard image={img2}/>
          <DummyCard image={img3}/>
          <DummyCard image={img4}/>
        </div>
        <div className="row row-cols-sm-2 row-cols-md-3">
          <DummyCard image={img1}/>
          <DummyCard image={img2}/>
          <DummyCard image={img3}/>
          <DummyCard image={img4}/>
        </div>
        <div className="row row-cols-sm-2 row-cols-md-3">
          <DummyCard image={img1}/>
          <DummyCard image={img2}/>
          <DummyCard image={img3}/>
          <DummyCard image={img4}/>
        </div>
      </div>
    </div>
  );
}
