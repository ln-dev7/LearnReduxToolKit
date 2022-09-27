import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictureData: (state, action) => {
      state.pictures = action.payload;
    },
    addPicture: (state, action) => {
      state.pictures.push(action.payload);
    },
    editPicture: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, action) => {
      state.pictures = state.pictures.filter(
        (pic) => pic.id !== action.payload
      );
    },
  },
});

export default pictureSlice.reducer;
export const { setPictureData, addPicture, editPicture, deletePicture } = pictureSlice.actions;
