import { useFormik } from "formik";
import * as Yup from "yup";
function Footer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
      formik.resetForm();
    },
  });
  return (
    <footer className="footer">
      <div className="container py-2">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h5>About PhoneHub</h5>
            <p>
              PhoneHub is your one-stop destination to explore, compare, and
              choose the latest smartphones from all major brands. Find the
              perfect phone tailored to your needs!
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-2">
            <h5>Contact Us</h5>
            <p>Email: support@phonehub.com</p>
            <hr />

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger small">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email */}
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger small">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Message */}
              <div className="mb-2">
                <textarea
                  className="form-control"
                  rows="2"
                  name="message"
                  placeholder="Your Message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-danger small">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-outline-info">
                Send
              </button>
            </form>
          </div>
        </div>
        <hr className="border" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 PhoneHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
