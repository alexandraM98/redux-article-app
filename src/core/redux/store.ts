import { configureStore } from "@reduxjs/toolkit";

import articleReducer from "../../features/articles/slice";

export const store = configureStore({
	reducer: { //object containing slice reducers
		articles: articleReducer, //slice reducer
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;