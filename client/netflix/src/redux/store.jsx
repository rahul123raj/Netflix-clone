import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchslice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: movieReducer,
    search: searchslice,
  },
});

export default store;
