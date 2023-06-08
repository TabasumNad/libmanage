import {React} from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import Home from "./Home";


const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a longer email")
    .required("Why not fill this email?😉"),
  password: yup
    .string()
    .min(8, "Need a longer password🥳")
    .max(12, "Too much password")
    .required("Why not fill this password?😉"),
});

function BasicForm() {
    
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/dashboard");
    },

  }
  );
 

  
  return (
      <div className="design">
        <h1 className="moto">Welcome to the Library Management Website</h1>
    <form  onSubmit={formik.handleSubmit}>
     <div >
        <h4 className="login">Login</h4>
      <input
      className="adjust"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="Enter email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
      className="adjust2"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
        placeholder="Enter password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button className="adjust3" type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default BasicForm;