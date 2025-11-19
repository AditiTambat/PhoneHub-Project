import { useAuth } from "../AuthContext";
import axios from "axios";

function PhoneCard({ phone }) {
  const { user } = useAuth();

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/cart/add", {
        userId: user.id,
        phoneId: phone.id,
        quantity: 1
      });


      alert("Added to cart!");
    } catch (err) {
      console.error(err);
      alert("Failed to add");
    }
  };

  return (
    <div className="card p-3">
      <h5>{phone.name}</h5>
      <p>₹{phone.price}</p>

      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PhoneCard;
