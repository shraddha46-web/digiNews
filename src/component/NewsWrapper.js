import React, { useEffect, useState } from "react";
import FooterWrapper from "./FooterWrapper";
import NewsDetails from "./NewsDetails";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsWrapper(props) {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageNumber, setLastPageNumber] = useState(1);
  const [isLoader, setIsloader] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    (async () => {
      const articless = await getNews(1);
      //setArticles(articless);
      document.title = capitalize(props.category);
    })();
  }, []);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const onhandleNext = () => {
    getNews(pageNumber + 1);
    setPageNumber(pageNumber + 1);
  };

  const onhandlePrev = () => {
    getNews(pageNumber - 1);
    setPageNumber(pageNumber - 1);
  };

  function getNews(pageNo) {
    // //By default all top headlines news without any category
    let newsUrl = `http://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api_key}&page=${pageNo}&pageSize=${props.pageSize}`;

    //All top news with selected category
    if (props.category !== "top headlines") {
      newsUrl = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${pageNo}&pageSize=${props.pageSize}`;
    }

    setIsloader(true);
    fetch(newsUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setArticles(json.articles);
        setLastPageNumber(Math.ceil(json.totalResults / props.pageSize));
        setIsloader(false);
        setTotalResults(json.totalResults);
      });
  }

  const fetchMoreData = async () => {
    let pageNo = pageNumber + 1;
    // //By default all top headlines news without any category
    let newsUrl = `http://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api_key}&page=${pageNo}&pageSize=${props.pageSize}`;

    //All top news with selected category
    if (props.category !== "top headlines") {
      newsUrl = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${pageNo}&pageSize=${props.pageSize}`;
    }

    await fetch(newsUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setArticles(articles.concat(json.articles));
        setPageNumber(pageNumber + 1);
        setTotalResults(json.totalResults);
      });
  };

  return (
    <div className=" my-4">
      <div className="container">
        {/* <div className="row"> */}
        <h1 className="margin-60">
          DigiNews -{" "}
          {props.category !== "top headlines"
            ? `${capitalize(props.category)}'s Top Headlines`
            : capitalize(props.category)}
        </h1>
      { isLoader && <Spinner /> }
        {articles && (
          <InfiniteScroll
            initialLoad="false"
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
            style={{ overflow: 'hidden' }} 
          >
            <div className="row">
              {
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
          </InfiniteScroll>
        )}
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
