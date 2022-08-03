import React, { useEffect, useState } from "react";
import FooterWrapper from "./FooterWrapper";
import NewsDetails from "./NewsDetails";
import Spinner from "./Spinner";

export default function NewsWrapper(props) {
  const [articles, setArticles] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageNumber, setLastPageNumber] = useState(1);
  const [isLoader, setIsloader] = useState(false);

  useEffect(() => {
    (async () => {
      const articless = await getNews(1);
      setArticles(articless);
      document.title = capitalize(props.category);
    })();
  }, []);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  function onhandleNext() {
    let updatedPageNumber = pageNumber + 1;
    setPageNumber(updatedPageNumber);
    getNews(updatedPageNumber);
  }

  function onhandlePrev() {
    let updatedPageNumber = pageNumber - 1;
    setPageNumber(updatedPageNumber);
    getNews(updatedPageNumber);
  }

  function getNews(pageNumber1) {
    //By default all top headlines news without any category
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=1e204760b8d449e8835960f269c4f1b9&page=${pageNumber1}&pageSize=${props.pageSize}`;

    //All top news with selected category
    if (props.category !== "top headlines") {
      newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1e204760b8d449e8835960f269c4f1b9&page=${pageNumber1}&pageSize=${props.pageSize}`;
    }

    setIsloader(true);
    fetch(newsUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setArticles(json.articles);
        setLastPageNumber(Math.ceil(json.totalResults / props.pageSize));
        setIsloader(false);
      });
  }

  return (
    <div className=" my-4">
      <div className="container">
        <div className="row">
          <h1>
            DigiNews -{" "}
            {props.category !== "top headlines"
              ? `${capitalize(props.category)}'s Top Headlines`
              : capitalize(props.category)}{" "}
          </h1>
          {isLoader && <Spinner />}
          {!isLoader &&
            articles &&
            articles.map((e) => (
              <NewsDetails
                key={e.title}
                title={e.title}
                author={e.author}
                description={e.description}
                publishedAt={e.publishedAt}
                url={e.url}
                urlToImage={e.urlToImage}
                source={e.source}
              />
            ))}
        </div>
      </div>
      <FooterWrapper
        lastPageNumber={lastPageNumber}
        pageNumber={pageNumber}
        onhandleNext={onhandleNext}
        onhandlePrev={onhandlePrev}
      />
    </div>
  );
}
