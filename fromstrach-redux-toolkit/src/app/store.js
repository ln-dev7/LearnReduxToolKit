import { configureStore } from "@reduxjs/toolkit";
import pictureReducer from "../feature/pictures.slice";

export default configureStore({
  reducer: {
    pictures: pictureReducer,
  },
});
