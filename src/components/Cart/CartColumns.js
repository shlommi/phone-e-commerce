import React from "react";

export default function CartColumns() {
  return (
    <div>
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>מוצרים</h4>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>שם המוצר</h4>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>מחיר</h4>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>כמות</h4>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>הסר</h4>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <h4>סך הכל</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
