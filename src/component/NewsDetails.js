import React from "react";

export default function NewsDetails(props) {
  let {
    title,
    description,
    author,
    publishedAt,
    url,
    urlToImage,
    source,
  } = props;
  let publishedAtDate = new Date(publishedAt).toUTCString();
  return (
    <div
      className="col-md-4 card-spacing my-5 position-relative mb-5 bg-body rounded news-card"
      key={title}
    >
      <span
        className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
        style={{ zIndex: "1",right: "0" }}
      >
        {source.name}
      </span>
      <div className="card border-0 px-3 shadow-sm " style={{textAlign: "justify"}}>
        <img
          src={
            urlToImage
              ? urlToImage
              :   "https://nenow.in/wp-content/uploads/2022/07/free-fire-redeem-codes.jpg"
              
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 51)}</h5>
          <p className="card-text">{description && description.slice(0, 100)}</p>
          {!description &&<p className="card-text no-text"></p>}
          <p className="card-text author">
            <small className="text-muted">
              By {author || "Unkown"} on {publishedAtDate}
            </small>
          </p>
          <a
            href={url}
            className="btn btn-view text-light "
            target="_blank"
            rel="noopener noreferrer"
            style={{float: "right"}}
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
