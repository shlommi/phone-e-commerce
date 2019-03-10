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
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
                setTimeout(() => {
                  resetForm();
                }, 700);
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
                      <label htmlFor="name" style={{ display: "block" }}>
                        שם מלא
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={
                          errors.name && touched.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="שם מלא"
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}

                      <label htmlFor="phone" style={{ display: "block" }}>
                        טלפון
                      </label>
                      <input
                        id="phone"
                        type="text"
                        className={
                          errors.phone && touched.phone
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="טלפון"
                      />
                      {errors.phone && touched.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}

                      <label htmlFor="email" style={{ display: "block" }}>
                        דואר אלקטרוני
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={
                          errors.email && touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="דואר אלקטרוני"
                      />
                      {errors.email && touched.email && (
                        <div classeName="invalid-feedback">{errors.phone}</div>
                      )}

                      <label htmlFor="dropdown" style={{ display: "block" }}>
                        מטרת הפנייה
                      </label>
                      <select
                        id="dropdown"
                        className={
                          errors.dropdown && touched.dropdown
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        value={values.dropdown}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>פנייה כללית</option>
                        <option>הזמנה קיימת</option>
                        <option>מתעניינת במוצר</option>
                        <option>ביטול הזמנה</option>
                      </select>
                      {errors.dropdown && touched.dropdown && (
                        <div classeName="invalid-feedback">
                          {errors.dropdown}
                        </div>
                      )}

                      <label htmlFor="userText" style={{ display: "block" }}>
                        תיאור הפנייה
                      </label>
                      <textarea
                        id="userText"
                        className={
                          errors.userText && touched.userText
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        value={values.userText}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="3"
                      />
                      {errors.userText && touched.userText && (
                        <div classeName="invalid-feedback">
                          {errors.userText}
                        </div>
                      )}

                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
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
