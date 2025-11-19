import { useAuth } from "../AuthContext";
import axios from "axios";
function Nothing(){

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
        <section className="android" id="nothing">
        <div className="container mt-3 p-3">
          <div className="row" id="nothing">
           
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm bg-body">
                <div className="card-body">
                  <p className="card-text">Nothing</p>
                  <h5 className="card-title">Phone (2)</h5>
                  <p className="card-text text-danger">From ₹33,999.00</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/n1.jpg"
                    alt="Nothing Phone (2)"
                    className="img-fluid mt-3 p-5"
                  />
                </div>
              </div>
            </div>

            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm bg-body">
                <div className="card-body">
                  <p className="card-text">Nothing</p>
                  <h5 className="card-title">Phone (1)</h5>
                  <p className="card-text text-danger">From ₹17,999.00</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/n2.jpg"
                    alt="Nothing Phone (1)"
                    className="img-fluid mt-3 p-5"
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
                    "https://in.nothing.tech/products/phone-1",
                    "_blank"
                  )
                }
              >
                See all Nothing Phones
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Nothing