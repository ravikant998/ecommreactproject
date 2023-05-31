import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../../shared/components/Banner";
import Spinner from "../../shared/components/Spinner";
import { productlist } from "../../shared/store/slices/productlistslice";

const Homepage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const productdata = useSelector((state) => state.productdata);
  // console.log("productdata>>>", productdata);
  useEffect(() => {
    setIsLoading(true);
    dispatch(productlist());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Banner />
      {/* <Spinner /> */}
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {productdata?.products?.map((ele, index) => {
                return (
                  <div
                    className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5"
                    key={index}
                  >
                    <Link
                      to={`/products/productdetail/${ele.id}`}
                      className="block relative  rounded overflow-hidden"
                    >
                      <img
                        src={ele.images[0]}
                        alt="image-alt"
                        className=" m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      />

                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {ele.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {ele.brand}
                        </h2>
                        <p className="mt-1">Price: ${ele.price}</p>
                        <p className="mt-1">Rating: {ele.rating}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default Homepage;
