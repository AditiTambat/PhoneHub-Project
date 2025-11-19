import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Services/authService";

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      await authService.signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      setMessage("Account created successfully ✔️");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      setMessage("Signup failed ❌ email may already exist");
    }
    setSubmitting(false);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h2 className="text-center mb-4">Create Account</h2>

      {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={handleSignup}
      >
        <Form>
          <div className="mb-3">
            <Field name="name" type="text" placeholder="Enter your name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="email" type="email" placeholder="Enter your email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="password" type="password" placeholder="Enter your password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="confirmPassword" type="password" placeholder="Confirm password" className="form-control" />
            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
          </div>

          <button className="btn btn-outline-info w-100" type="submit">Sign Up</button>

          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;

