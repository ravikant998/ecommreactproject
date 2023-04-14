import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { proCategory } from "../../api/endpoints";

const initialState = [];
export const categorybylist = createAsyncThunk(
  "categrydetails",
  async (name) => {
    const response = await Api.get(`${proCategory}/${name}`).then((res) => {
      return res.data;
    });
    return response;
  }
);

const categorybylistSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categorybylist.fulfilled, (state, action) => {
      state = action.payload;

      return state;
    });
  },
});
export default categorybylistSlice.reducer;
