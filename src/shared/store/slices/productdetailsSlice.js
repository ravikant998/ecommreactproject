import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { singleproduct } from "../../api/endpoints";

const initialState = [];
export const productDetail = createAsyncThunk("productdetails", async (id) => {
  const response = await Api.get(`${singleproduct}/${id}`).then((res) => {
    return res.data;
  });
  return response;
});

const productDetailSlice = createSlice({
  name: "produtdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetail.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default productDetailSlice.reducer;
