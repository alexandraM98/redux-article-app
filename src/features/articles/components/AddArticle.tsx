import * as React from "react";
import { Article } from "../article";

interface Props {
  saveArticle: (article: Article | any) => void //function that takes in a parameter of type IArticle or any and has no return value
}

//export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
export const AddArticle = ({saveArticle}: Props): JSX.Element => {
  const [article, setArticle] = React.useState<Article | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({ 
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  )
}