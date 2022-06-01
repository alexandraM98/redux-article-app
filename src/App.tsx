import "./styles.css";
import { Article } from "./features/articles/article";
import { AddArticle } from "./features/articles/components/AddArticle";
import { actions } from "./features/articles/slice";
import { useAppDispatch, useAppSelector } from "./core/redux/hooks";
import { ArticleComponent } from "./features/articles/components/Article";

//const App: React.FC = () => {
export default function App() {

  //refactor to use the connect function 	
  const articles: readonly Article[] = useAppSelector((state) => state.articles.articles); //replaced with react hook instead of plain useSelector

  const dispatch = useAppDispatch(); //replaced with react hook instead of plain useDispatch 

  const saveArticle = (article: Article) => dispatch(actions.addArticle(article)); //dispatching the addArticle action from the article slice

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: Article) => (
        <ArticleComponent
          key={article.id}
          article={article}
          removeArticle={actions.removeArticle}
        />
      ))}
    </main>
  )
};
