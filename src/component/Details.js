import React from 'react'

export default function Details(props) {

  
 let { title, author, description, publishedAt, url, urlToImage } = props;
  let publishedAtDate = (new Date(publishedAt)).toUTCString();
  return (
    <div className="col-md-4 mr-2 my-5" key = {title}>
       <div className="card">
            <img src={urlToImage ? urlToImage :"https://nenow.in/wp-content/uploads/2022/07/free-fire-redeem-codes.jpg"} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title?.slice(0, 20)}</h5>
           

              <p className="card-text">{description?.slice(0, 80)}</p>
              {/* <p></p> */}
              <div className="card-footer text-muted">
              By {author} on  {publishedAtDate}
            </div>
              <a
                href={url}
                className="btn btn-view text-dark "
                // data-bs-toggle="modal"
                // data-bs-target="#newsDetailModal"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </div>
    </div>
  )
}
