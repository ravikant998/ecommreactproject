import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../api/index";
import { product } from "../../api/endpoints";

const initialState = [];
export const productlist = createAsyncThunk("product", async () => {
  const response = await Api.get(product).then((res) => {
    // console.log("res>>>", res);
    return res.data;
  });
  return response;
});

const productlistslice = createSlice({
  name: "productlisting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productlist.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export default productlistslice.reducer;
