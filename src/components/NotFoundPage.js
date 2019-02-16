import React, { Component } from "react";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5">
              <h1 className="display-3">404 שגיאה</h1>
              <h1>דף לא נמצא</h1>
              <h3>
                הכתובת שהקלדת{" "}
                <span className="text-danger">
                  {this.props.location.pathname}
                </span>{" "}
                לא נמצאה
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
