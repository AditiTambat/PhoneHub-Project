import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

function UserCart() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      console.log("Fetching cart for user =", user.id);

      axios
        .get(`http://localhost:8080/api/cart/${user.id}`)
        .then((res) => {
          console.log("Cart API Response:", res.data);
          setItems(res.data);
        })
        .catch((err) => console.error("Cart Error:", err));
    }
  }, [user]);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <div className="card p-3 my-2" key={item.cartItemId}>
            <h5>{item.phoneName}</h5>
            <p>₹{item.price}</p>
            <span>Qty: {item.quantity}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default UserCart;
