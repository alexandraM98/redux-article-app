import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "./article";

export const fetchArticle = createAsyncThunk("article/fetchAll", async () => {

	//get the current article
	//get payload
	//return an array inside the response const e.g., id: payload.id, title: payload.title, body: payload.body...
	const response = {
		data: 
		[
		],
	};


});
  
export const updateTenant = createAsyncThunk(
	"tenants/updateOne",
	async (article: Article) => {
	// const response = await fetch()
		const response = { data: article };
  
		return response.data;
	}
);
