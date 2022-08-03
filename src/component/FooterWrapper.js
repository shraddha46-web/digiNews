import React from "react";

export default function FooterWrapper(props) {

  return (
    <div className="footer-wrapper" style={{textAlign : 'left'}}>
     <div className="pb-5">
      <div className="container">
     <button disabled = {props.pageNumber === 1 } className="btn btn-primary" onClick={props.onhandlePrev}>
          Prev &nbsp;<i className="bi bi-arrow-right"></i>
        </button>
        <button disabled = {props.lastPageNumber === props.pageNumber} className="btn btn-primary float-end" onClick={props.onhandleNext}>
          Next &nbsp;<i className="bi bi-arrow-right"></i>
        </button>
        </div>
      </div>
      <div className=" bg-color-footer text-color-grey">
        <div className=" px-4 ">
          <div className="row gx-4">
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className=" text-light mt-5">
                <h5>Dummy Text</h5>
                <div className="footer-content text-color-grey">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </div>
                <section className="my-3">
                  <a className="m-3 text-light ">
                    <i className="bi bi-google "></i>
                  </a>
                  <a className="m-3 text-light ">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a className="m-3 text-light ">
                    <i className="bi bi-twitter"></i>
                  </a>
                </section>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className="  text-light mt-5">
                <h5>Product</h5>
                <ul className="footer-content p-0 text-color-grey">
                  <li>Theme Design</li>
                  <li>Plugin Design</li>
                  <li>Wordpress</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className="text-light mt-5">
                <h5>Useful Link</h5>
                <ul className="footer-content p-0 text-color-grey">
                  <li>Blog</li>
                  <li>Pricing</li>
                  <li>Sales</li>
                  <li>Tickets</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className="text-light mt-5">
                <h5>Address</h5>
                <ul className="footer-content p-0 text-color-grey">
                  <li>It is a long established</li>
                  <li>fact that </li>
                  <li>Pune 4111027</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-3 text-light bg-color-header">
        All rights reserved by &copy; 2022 Copyright
      </div>
      {/* <!-- Copyright --> */}
    </div>
  );
}
