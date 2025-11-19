import { useAuth } from "../AuthContext";
import axios from "axios";
function Samsung(){

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
        <section className="android" id="samsung">
        <div className="container mt-3 p-3">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy Z Flip6</h5>
                  <p className="card-text text-danger">From ₹1,09,999</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  
                 
                  <img
                    src="and/s1.jpg"
                    alt="Galaxy Z Flip6"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy Z Fold6</h5>
                  <p className="card-text text-danger">From ₹164,999.00</p>
                  <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/s2.jpg"
                    alt="Galaxy Z Fold6"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy S24 Ultra</h5>
                  <p className="card-text text-danger">From ₹1,29,999</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/s3.jpg"
                    alt="Galaxy S24 Ultra"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy S24+</h5>
                  <p className="card-text text-danger">From ₹99,999</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/s4.jpg"
                    alt="Galaxy S24+"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy S24</h5>
                  <p className="card-text text-danger">From ₹62,999.00</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/s5.jpg"
                    alt="Galaxy S24"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Samsung</p>
                  <h5 className="card-title">Galaxy Z Flip5</h5>
                  <p className="card-text text-danger">From ₹99,999</p>
                   <button className="btn btn-outline-info me-2"
                   onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                  <img
                    src="and/s6.jpg"
                    alt="Galaxy Z Flip5"
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
                    "https://www.samsung.com/in/smartphones/?srsltid=AfmBOopr_2phVBBVnbIshLBNvqxsBezsN__ZdfHepbMd6J2Z4c9EYNIQ",
                    "_blank"
                  )
                }
              >
                See all Samsung Phones
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Samsung