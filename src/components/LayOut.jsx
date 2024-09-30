"use client";

import { store } from "@/Redux/store";
import { Provider } from "react-redux";

const LayOut = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default LayOut;
