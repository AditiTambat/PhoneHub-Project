import { useEffect, useState } from "react";
import { getCart } from "../Services/CartService";

export default function Cart() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const userId = localStorage.getItem("userId");
    const res = await getCart(userId);
    setItems(res.data);
  };

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map(item => (
        <div key={item.cartItemId}>
          <h3>{item.phoneName}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
