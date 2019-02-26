import React from "react";
import IconsAbout from "./IconsContact";
import { Formik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <IconsAbout />
        </div>
        <div className="row">
          <h4 className="col-12 col-md-6 col-lg-8 mx-auto text-blue mb-3">
            צרי איתנו קשר
          </h4>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-8 mx-auto  mb-5 border p-4">
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                dropdown: "",
                userText: ""
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Required"),
                phone: Yup.string().required("Required"),
                email: Yup.string()
                  .email()
                  .required("Required"),
                dropdown: Yup.string().required("Required"),
                userText: Yup.string().required("Required")
              })}
            >
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset
                } = props;
                return (
                  <React.Fragment>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name" style={{ display: "block" }}>
                          שם מלא
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="שם מלא"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" style={{ display: "block" }}>
                          טלפון
                        </label>
                        <input
                          id="phone"
                          type="text"
                          className="form-control"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="טלפון"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" style={{ display: "block" }}>
                          דואר אלקטרוני
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="דואר אלקטרוני"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="dropdown" style={{ display: "block" }}>
                          מטרת הפנייה
                        </label>
                        <select
                          id="dropdown"
                          class="form-control"
                          value={values.dropdown}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option>פנייה כללית</option>
                          <option>הזמנה קיימת</option>
                          <option>מתעניינת במוצר</option>
                          <option>ביטול הזמנה</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label htmlFor="userText" style={{ display: "block" }}>
                          תיאור הפנייה
                        </label>
                        <textarea
                          id="userText"
                          class="form-control"
                          value={values.userText}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows="3"
                        />
                      </div>

                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">
                          ברצוני לקבל מידע על מבצעים ומוצרים באתר
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isSubmitting}
                      >
                        שלח
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary ml-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        נקה
                      </button>
                    </form>
                  </React.Fragment>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
