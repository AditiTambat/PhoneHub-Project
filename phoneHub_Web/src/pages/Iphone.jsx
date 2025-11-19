import { useAuth } from "../AuthContext";
import axios from "axios";

function IPhone() {
    const { user } = useAuth();
   

    const handleAddToCart = async (phoneId) => {
      if (!user) {
        alert("Please login first!");
        return;
      }

      try {
        await axios.post("http://localhost:8080/api/cart/add", {
          userId: user.id,
          phoneId: phoneId,
          quantity: 1
        });

        alert("Added to cart!");
      } catch (err) {
        console.error(err);
        alert("Failed to add");
      }
    };


  return (
    <>
      <style>
        {` 
          .card {
          background: transparent !important;  /* no background */
          border: none !important;             /* remove border */
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
        <div className="container d-flex justify-content-between align-items-center mt-5">
          <p className="fw-bold iphone-title">iPhone</p>
          <p className="fw-bold iphone-tagline">Designed to be loved.</p>
        </div>

       
        <div className="video-container">
          <video src="iphone.mp4" controls autoPlay loop muted>
            Your browser does not support the video tag.
          </video>
        </div>

       
        <section className="ip_intro">
          <div className="iheading">
            <h2>Get to know iPhone.</h2>
          </div>
          <div className="container mt-5">
            <div className="carousel-container d-flex overflow-x-auto gap-4 p-3">
              {/* Card 1 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Apple Intelligence.</p>
                  <p className="fw-bold fs-3">Powerful possibilities.</p>
                </div>
                <img
                  src="ios/ic1.jpg"
                  alt="Apple Intelligence"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 2 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Cutting-Edge Cameras</p>
                  <p className="fw-bold fs-3">Best photos and videos.</p>
                </div>
                <img
                  src="ios/ic2.jpg"
                  alt="Cameras"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 3 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Chip and Battery Life</p>
                  <p className="fw-bold fs-3">Fast that lasts.</p>
                </div>
                <img
                  src="ios/ic3.jpg"
                  alt="Chip & Battery"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 4 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-dark">
                  <p className="mb-0 mt-3 fs-5">Innovation</p>
                  <p className="fw-bold fs-3">Beautiful and durable.</p>
                </div>
                <img
                  src="ios/ic4.jpg"
                  alt="Innovation"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 5 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-dark">
                  <p className="mb-0 mt-3 fs-5">Environment</p>
                  <p className="fw-bold fs-3">Recycle. Reuse. Repeat.</p>
                </div>
                <img
                  src="ios/ic5.jpg"
                  alt="Environment"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 6 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Privacy</p>
                  <p className="fw-bold fs-3">
                    Your data.   <br /> 
                    Just where you want it.
                  </p>
                </div>
                <img
                  src="ios/ic6.jpg"
                  alt="Privacy"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 7 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Customise Your iPhone</p>
                  <p className="fw-bold fs-3">
                    Make it you. <br /> Through and through.
                  </p>
                </div>
                <img
                  src="ios/ic7.jpg"
                  alt="Customise"
                  className="img-fluid rounded"
                />
              </div>

              {/* Card 8 */}
              <div className="carousel-card position-relative">
                <div className="text-overlay position-absolute top-0 start-0 w-100 text-center bg-opacity-50 py-2 rounded-top text-white">
                  <p className="mb-0 mt-3 fs-5">Peace of Mind</p>
                  <p className="fw-bold fs-3">Helpful safety features.</p>
                </div>
                <img
                  src="ios/ic8.jpg"
                  alt="Peace of Mind"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* iPhone Models with Price */}

        <section id="ip-prize" className="mb-5">
          <div className="container mt-5">
            <div className="d-flex overflow-auto gap-5">
              {/* Model 1 */}
              <div className="ip-prize card text-center">
                <img
                  src="ios/ip1.png"
                  className="card-img-top"
                  alt="iPhone 16 Pro"
                />
                <div className="card-body">
                  <h5 className="fw-bold">iPhone 16 Pro</h5>
                  <p>The ultimate iPhone.</p>
                  <p className="text-danger fw-semibold">Price: ₹119,900.00</p>
                  <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                </div>
              </div>

              {/* Model 2 */}
              <div className="ip-prize card text-center">
                <img
                  src="ios/ip2.png"
                  className="card-img-top"
                  alt="iPhone 16"
                />
                <div className="card-body">
                  <h5 className="fw-bold">iPhone 16</h5>
                  <p>A total powerhouse.</p>
                  <p className="text-danger fw-semibold">Price: ₹79,900.00</p>
                    <button className="btn btn-outline-info me-2"
                    onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                </div>
              </div> 

              {/* Model 3 */}
              <div className="ip-prize card text-center">
                <img
                  src="ios/ip3.png"
                  className="card-img-top"
                  alt="iPhone 15"
                />
                <div className="card-body">
                  <h5 className="fw-bold">iPhone 15</h5>
                  <p>All kinds of awesome.</p>
                  <p className="text-danger fw-semibold">Price: ₹59,900.00</p>
                    <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                </div>
              </div>

              {/* Model 4 */}
              <div className="ip-prize card text-center">
                <img
                  src="ios/ip4.png"
                  className="card-img-top"
                  alt="iPhone 14"
                />
                <div className="card-body">
                  <h5 className="fw-bold">iPhone 14</h5>
                  <p>Serious power. Serious value.</p>
                  <p className="text-danger fw-semibold">Price: ₹47,600.00</p>
                    <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                </div>
              </div>

              {/* Model 5 */}
              <div className="ip-prize card text-center">
                <img
                  src="ios/ip5.png"
                  className="card-img-top"
                  alt="iPhone SE"
                />
                <div className="card-body">
                  <h5 className="fw-bold">iPhone SE</h5>
                  <p>More to love for less.</p>
                  <p className="text-danger fw-semibold">Price: ₹43,900.00</p>
                    <button className="btn btn-outline-info me-2"
                  onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IPhone;
