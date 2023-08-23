import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  return <div>Category : {name}</div>;
};

export default Category;
