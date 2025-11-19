import { useAuth } from "../AuthContext";
import axios from "axios";
function Google(){
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

    return(
        <section className="android" id="google">
        <div className="container mt-3 p-3">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-body">
                <div className="card-body">
                  <p className="card-text">Google</p>
                  <h5 className="card-title">Pixel 9 Pro XL</h5>
                  <p className="card-text text-danger">From ₹124,999.00</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                      Add to Cart</button>
                  <img
                    src="and/g1.jpg"
                    alt="Pixel 9 Pro XL"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-body">
                <div className="card-body">
                  <p className="card-text">Google</p>
                  <h5 className="card-title">Pixel 9 Pro Fold2</h5>
                  <p className="card-text text-danger">From ₹172,999.00</p>
                   <button className="btn btn-outline-info me-2"
                    onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/g2.jpg"
                    alt="Pixel 9 Pro Fold2"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-body">
                <div className="card-body">
                  <p className="card-text">Google</p>
                  <h5 className="card-title">Pixel 9</h5>
                  <p className="card-text text-danger">From ₹79,999.00</p>
                   <button className="btn btn-outline-info me-2"
                     onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/g3.jpg"
                    alt="Pixel 9"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-body">
                <div className="card-body">
                  <p className="card-text">Google</p>
                  <h5 className="card-title">Pixel 8a</h5>
                  <p className="card-text text-danger">From ₹50,999.00</p>
                   <button className="btn btn-outline-info me-2"
                      onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/g4.jpg"
                    alt="Pixel 8a"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-2 flex-column align-items-center mb-4">
              <button
                type="button"
                className="btn btn-outline-dark mb-2"
                onClick={() =>
                  window.open(
                    "https://store.google.com/category/phones?hl=en-GB&pli=1",
                    "_blank"
                  )
                }
              >
                See all Google Phones
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Google