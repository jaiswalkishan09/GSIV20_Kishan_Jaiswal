import React from "react";

export default function ListCard() {
  return (
    <>
      <div className="Card shadow-lg  mb-5 bg-white rounded">
        <img
          className="card-img-top"
          src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
          alt="Card image cap"
          style={{ height: "200px", width: "200px" }}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-8" style={{ paddingRight: "0px !important" }}>
              <h5 className="card-title">Card title</h5>
            </div>
            <div className="col-4" style={{ textAlign: "right" }}>
              rating
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">Description</h6>
        </div>
      </div>
    </>
  );
}
