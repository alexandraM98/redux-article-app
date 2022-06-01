import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Article } from "../article";

interface Props {
  article: Article;
  removeArticle: (article: Article) => void
}

//export const Article: React.FC<Props> = ({ article, removeArticle }) => {

export const ArticleComponent = ({article, removeArticle}: Props) => {
  const dispatch: Dispatch<any> = useDispatch() //

  const deleteArticle = (article: Article) => dispatch(removeArticle(article)); //removed the callback function

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  )
}