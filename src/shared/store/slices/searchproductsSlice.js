import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { searchdata } from "../../api/endpoints";

const initialState = [];
export const searchproduct = createAsyncThunk("search", async (searchInput) => {
  const response = await Api.get(`${searchdata}?q=${searchInput}`).then(
    (res) => {
      return res.data;
    }
  );
  return response;
});

const searchproductsSlice = createSlice({
  name: "search data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchproduct.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export default searchproductsSlice.reducer;
