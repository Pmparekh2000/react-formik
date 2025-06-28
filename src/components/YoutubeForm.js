import { useFormik } from "formik";
import React from "react";
import { initialValues } from "../form/youtube/intialValues";
import { onSubmit } from "../form/youtube/onSubmit";
import { validate } from "../form/youtube/validate";

const YoutubeForm = () => {
  // Make use of short-hand syntax and import stuff from different files to keep thigs readable
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  console.log("Form values", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched?.name && formik.errors?.name ? (
            <div className="error">{formik.errors?.name}</div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched?.email && formik.errors?.email ? (
            <div className="error">{formik.errors?.email}</div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched?.channel && formik.errors?.channel ? (
            <div className="error">{formik.errors?.channel}</div>
          ) : (
            <></>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
