import { useAuth } from "../AuthContext";
import axios from "axios";
function Motorola(){

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
         <section className="android" id="motorola">
      <div className="container mt-3 p-3">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm bg-light">
              <div className="card-body text-center">
                <p className="card-text fw-bold">Motorola</p>
                <h5 className="card-title">Edge 50 Pro</h5>
                <p className="card-text text-danger">₹31,999.00</p>
                <button className="btn btn-outline-info me-2"
                      onClick={() => handleAddToCart(1)}>
                     Add to Cart</button>
                <img src="and/m1.jpg" alt="Motorola Edge 50 Pro" className="img-fluid mt-3" />
              </div>
            </div>
          </div>
        </div>

       
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-2 flex-column align-items-center mb-4">
            <button
              type="button"
              className="btn btn-outline-dark mb-2"
              onClick={() => window.open("https://www.motorola.in/smartphones", "_blank")}
            >
              See all Motorola Phones
            </button>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Motorola