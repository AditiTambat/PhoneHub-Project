
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"; 

const UserDashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("userName");

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (!role || role !== "USER") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

     

      {/* Main Content */}
      <main className="main-content">
        
        {/* Dashboard Sections */}
        <section className="dashboard-widgets">
          
          <div className="widget">
            <h4>Your Profile</h4>
            <p>Name: {name}</p>
            <p>Email: {localStorage.getItem("userEmail")}</p>
          </div>

          <div className="widget">
            <h4>Orders</h4>
            <p>No recent orders</p>
          </div>

          <div className="widget">
            <h4>Cart</h4>
            <p>Your cart items will appear here</p>
          </div>

        </section>

        <section className="recent-activity">
          <h3>Recent Activity</h3>
          <p>No activity yet.</p>
        </section>

      </main>
    </div>
  );
};

export default UserDashboard;
