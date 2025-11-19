import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {` 
          .card{
          background: linear-gradient(to left,#76daec, #f0f0f0);
          margin-bottom: 100px;
          }
          .card-main{
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
            transition: box-shadow 0.3s ease-in-out;
          }
          .card-main:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);  
          }
        `}
      </style>

      <div>
        {/* Page Title */}
        <div
          className="ip-heading card text-center mt-5 mb-3"
          style={{ border: "none" }}
        >
          <div className="card-body">
            <h5 className="card-name fw-bold fs-2">Welcome to PhoneHub</h5>
            <p className="card-text fs-5">
              Discover and compare the latest smartphones from all major brands.
              Find your perfect phone based on your budget and preferences.
            </p>
            <p className="fw-semibold fs-5">
              Select a below category to explore
            </p>
          </div>
        </div>
        {/* Page Title Ends */}

        {/* iphone Cards Section */}
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6 mb-sm-0">
              <div className="card card-main">
                <img
                  src="a1.jpg"
                  className="card-img-top"
                  alt="iOS"
                  height="300px"
                  width="300px"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-center">iOS</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/iphone");
                      window.scrollTo(0, 0);
                    }}
                  >
                    See Phones
                  </button>
                </div>
              </div>
            </div>

            {/* Android Card */}
            <div className="col-md-6">
              <div className="card card-main">
                <img
                  src="a2.jpg"
                  className="card-img-top"
                  alt="Android"
                  height="300px"
                  width="300px"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Android</h5>

                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/android");
                      window.scrollTo(0, 0);
                    }}
                  >
                    See Phones
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Cards Section Ends */}
      </div>
    </>
  );
}
export default Home;
