//The type.d.ts file that holds the TypeScript types, which can be used now in other files without importing

type ArticleState = {
	articles: IArticle[]
}
  
type ArticleAction = {
	type: string,
	article: IArticle
}
  
type DispatchType = (args: ArticleAction) => ArticleAction