import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = (data) => {
  const catdata = data;
  const [catlist, setCatlist] = useState([]);
  //   console.log("catlist>>>>", catlist);
  useEffect(() => {
    setCatlist(catdata);
  }, []);
  return (
    <div>
      <h1>Show by Category</h1>
      <div className="space-x-2 flex">
        {catlist?.data?.map((categoryname, index) => {
          return (
            <div key={index}>
              <Link to={`/products/categorybylist/${categoryname}`}>
                <ul>
                  <li>{categoryname.toUpperCase()}</li>
                </ul>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
