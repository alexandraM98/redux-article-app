import { Article } from "./article";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface ArticleState {
	articles: Article[],
};

const initialState: ArticleState = {
	articles: [
			{
			  id: nanoid(),
			  title: "post 1",
			  body:
				"Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
			},
			{
			  id: nanoid(),
			  title: "post 2",
			  body:
				"Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
			},
	],
};

const articleSlice = createSlice({
	name: 'articles',
	initialState: initialState,
	
	reducers: {
	  addArticle: (state, action) => {
		const newArticle: Article = {
			id: nanoid(), //replaced Math.random()
			title: action.payload.title,
			body: action.payload.body,
		  }
		  state.articles.push(newArticle);
	  },

	  removeArticle: (state, action) => {
		const updatedArticles: Article[] = state.articles.filter(
			article => article.id !== action.payload.id
		  )
		  return {
			...state,
			articles: updatedArticles,
		  }
	  },
	},
});

export const { actions } = articleSlice;
const { reducer } = articleSlice;

export default reducer;