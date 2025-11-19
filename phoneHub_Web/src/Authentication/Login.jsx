import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Services/authService";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await authService.login(values);

      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("userName", res.data.name);
      localStorage.setItem("userEmail", res.data.email);
      localStorage.setItem("role", res.data.role);

      setUser({
        userId: res.data.userId,
        name: res.data.name,
        email: res.data.email,
        role: res.data.role,
      });

      setMessage("Login Successful");

      setTimeout(() => {
        if (res.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }, 1000);

    } catch (err) {
      setMessage("Invalid email or password ");
    }

    setSubmitting(false);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h2 className="text-center mb-4">Login</h2>

      {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="mb-3">
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <button className="btn btn-outline-info w-100" type="submit">Login</button>

          <p className="mt-3 text-center">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
