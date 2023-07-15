import React from "react";

import Card from "./Card";
import dataArray from "./data";

export default function maps() {
  const DataElements = dataArray.map((data) => {
    return <Card key={data.id} data={data} />;
  });
  return DataElements;
}
