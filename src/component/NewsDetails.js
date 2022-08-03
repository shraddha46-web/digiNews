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
      className="col-md-4 card-spacing my-5 position-relative shadow-sm mb-5 bg-body rounded"
      key={title}
    >
      <span
        className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger"
        style={{ zIndex: "1", left: "90%" }}
      >
        {source.name}
      </span>
      <div className="card border-0">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://nenow.in/wp-content/uploads/2022/07/free-fire-redeem-codes.jpg"
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 20)}</h5>
          <p className="card-text">{description && description.slice(0, 80)}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || "Unkown"} on {publishedAtDate}
            </small>
          </p>
          <a
            href={url}
            className="btn btn-view text-dark "
            // data-bs-toggle="modal"
            // data-bs-target="#newsDetailModal"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
