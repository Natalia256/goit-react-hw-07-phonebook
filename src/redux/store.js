import { configureStore} from "@reduxjs/toolkit";
import reducers from "./phonebook/reducers";


const store = configureStore({
  reducer: { contacts: reducers },
  devTools: process.env.NODE_ENV === "development",
});
// eslint-disable-next-line import/no-anonymous-default-export
export default store;