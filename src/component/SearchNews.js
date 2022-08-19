import React, { useState } from "react";
import NewsDetails from "./NewsDetails";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function SearchNews(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageNumber, setLastPageNumber] = useState(1);
  const [isLoader, setIsloader] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const handleChange = (event) => {
    setSearchKeyword(event.target.value);
    if (event.target.value.length > 3) {
      let articless = getNews(1, event.target.value);
    }
  };

  function getNews(pageNo, searchWord) {
    let newsUrl = `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=publishedAt&apiKey=${props.api_key}`;

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
    let newsUrl = `https://newsapi.org/v2/everything?q=${searchKeyword}&sortBy=publishedAt&apiKey=${props.api_key}`;

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
    <div className="container-fluid news-search">
      <div className="container">
        <nav className="navbar bg-light m-5">
          <form className="container-fluid">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                value={searchKeyword}
                onChange={handleChange}
                className="form-control"
                placeholder="Keyword"
                aria-label="Keyword"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </nav>

        <div>
          {isLoader && <Spinner />}
          {articles && (
            <InfiniteScroll
              initialLoad="false"
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
              style={{ overflow: "hidden" }}
            >
              <div className="row  shraaa">
                {articles.map((e) => (
                  <NewsDetails
                    key={e.url}
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
      </div>
    </div>
  );
}
