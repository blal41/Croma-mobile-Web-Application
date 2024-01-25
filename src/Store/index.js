import { configureStore } from "@reduxjs/toolkit";

// import uiSLice from "./ui-slice";
import cartSLice from "./cart-slice";

const store = configureStore({
    reducer :{ cart : cartSLice.reducer},
});

export default store;