import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [adminName, setAdminName] = useState("");
  const [users, setUsers] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("userName");

    if (!role || role !== "ADMIN") {
      navigate("/login");
    }

    if (name) setAdminName(name);

    fetchUsers();
    fetchPhones();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log("Error fetching users");
    }
  };

  const fetchPhones = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/phones");
      const data = await res.json();
      setPhones(data);
    } catch (err) {
      console.log("Error fetching phones");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-container">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Manage Users</li>
          <li>Manage Products</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Area */}
      <main className="admin-main">
        
        <section className="admin-section">
          <h3>All Users</h3>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="admin-section">
          <h3>All Products</h3>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {phones.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.brand}</td>
                  <td>{p.model}</td>
                  <td>₹{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
