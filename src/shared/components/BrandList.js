import React from "react";

const BrandList = ({ props }) => {
  const data = props;
  return (
    <div>
      <h1>Show by Category</h1>
      <div className="space-x-2 flex">
        {data?.map((categoryname, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{categoryname.toUpperCase()}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandList;
