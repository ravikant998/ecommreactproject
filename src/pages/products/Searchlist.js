import React from "react";

const Searchlist = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <h1>Search List</h1>
          {/* {data?.products?.slice(0, 8).map((ele, index) => {
          return (
            <Link href="" legacyBehavior key={index}>
              <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    src={ele.images[0]}
                    alt="image-alt"
                    className=" m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                    width="500"
                    height="500"
                  ></Image>
                </a>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {ele.title}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {ele.brand}
                  </h2>
                  <p className="mt-1">Price:${ele.price}</p>
                  <p className="mt-1">Rating:{ele.rating}</p>
                </div>
              </div>
            </Link>
          );
        })} */}
        </div>
      </div>
    </section>
  );
};

export default Searchlist;
