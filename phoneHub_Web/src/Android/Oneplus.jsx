import { useAuth } from "../AuthContext";
import axios from "axios";
function Oneplus(){

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
      <section className="android" id="oneplus">
        <div className="container mt-3 p-3">
          <div className="row" id="oneplus">
           
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm bg-body">
                <div className="card-body">
                  <p className="card-text">OnePlus</p>
                  <h5 className="card-title">OnePlus 12</h5>
                  <p className="card-text text-danger">From ₹64,999.00</p>
                   <button className="btn btn-outline-info me-2"
                    onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/o1.jpg"
                    alt="OnePlus 12"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm bg-body">
                <div className="card-body">
                  <p className="card-text">OnePlus</p>
                  <h5 className="card-title">OnePlus 12R</h5>
                  <p className="card-text text-danger">From ₹39,999.00</p>
                   <button className="btn btn-outline-info me-2"
                  onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/o2.jpg"
                    alt="OnePlus 12R"
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
                  window.open("https://www.oneplus.in/store/phone", "_blank")
                }
              >
                See all OnePlus Phones
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Oneplus