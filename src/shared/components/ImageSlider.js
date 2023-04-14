import React, { useEffect, useState } from "react";

const ImageSlider = ({ data }) => {
  //   console.log("data>>>", data);
  const [imageData, setimageData] = useState();
  //   console.log("imageData>>>", imageData);
  useEffect(() => {
    setimageData(data?.images?.[0]);
  }, [data]);

  const handleClick = (index) => {
    // console.log("index>>>", index);
    const imageClick = data.images[index];
    // console.log("imageClick>>>", imageClick);
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
          // console.log("image>>>>",image)
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
