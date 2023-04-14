import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import { productlist } from "../../shared/store/slices/productlistslice";
import BrandList from "./BrandList";

const Header = () => {
  const dispatch = useDispatch();
  const [showcategory, setShowCategory] = useState();
  // console.log("showcategory>>>", showcategory);
  const [showbrand, setShowbrand] = useState();

  const allData = useSelector((state) => state.productdata);

  const categorylist = allData?.products?.map((data) => data.category);
  // console.log("categorylist>>>", categorylist);
  const brandlist = allData?.products?.map((data) => data.brand);

  // Remove duplicate element from data
  let uniqueCategories = [];
  categorylist?.forEach((category) => {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  });

  // Remove duplicate  element from data
  let uniquebrand = [];
  brandlist?.forEach((brand) => {
    if (!uniquebrand.includes(brand)) {
      uniquebrand.push(brand);
    }
  });
  // console.log("uniquebrand>>>", uniquebrand);

  useEffect(() => {
    setShowCategory(uniqueCategories);
    setShowbrand(uniquebrand);
  }, [allData]);

  useEffect(() => {
    dispatch(productlist());
  }, []);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {/* <span className="sr-only">Open menu</span> */}
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                    // className={classNames(
                    //   open ? "text-gray-900" : "text-gray-500",
                    //   "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    // )}
                    >
                      <span>Category</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <div className="ml-4">
                              <CategoryList data={showcategory} />
                              {/* <p className="mt-1 text-sm text-gray-500">gggggg</p> */}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Brand</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <div className="ml-4">
                              <BrandList props={showbrand} />
                              {/* <p className="mt-1 text-sm text-gray-500">gggggg</p> */}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </Popover>
    </>
  );
};
export default Header;
