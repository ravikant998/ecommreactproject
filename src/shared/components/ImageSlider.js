import React, { useEffect, useState } from "react";

const ImageSlider = ({ data }) => {
  const [imageData, setimageData] = useState();

  useEffect(() => {
    setimageData(data?.images?.[0]);
  }, [data]);

  const handleClick = (index) => {
    const imageClick = data.images[index];

    setimageData(imageClick);
  };
  return (
    <div className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded">
      <img
        src={imageData}
        height="00"
        width="500"
        alt="images"
        className="border border-x-5"
      />
      <div className="flex mt-5">
        {data?.images?.map((image, i) => {
          return (
            <div key={i}>
              <img
                src={image}
                onClick={() => handleClick(i)}
                height="500"
                width="500"
                alt="images"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
