import { configureStore } from "@reduxjs/toolkit";
import categorybylistSlice from "./slices/categorybylistSlice";
import productdetailsSlice from "./slices/productdetailsSlice";

import productlistslice from "./slices/productlistslice";
import searchproductsSlice from "./slices/searchproductsSlice";

export const store = configureStore({
  reducer: {
    productdata: productlistslice,
    productdetail: productdetailsSlice,
    category: categorybylistSlice,
    searchproductdata: searchproductsSlice,
  },
});
