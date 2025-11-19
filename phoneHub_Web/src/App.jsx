import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IPhone from "./pages/Iphone";
import Android from "./Android/Android";
import Google from "./Android/Google";
import Motorola from "./Android/Motorola";
import Oneplus from "./Android/Oneplus";
import Samsung from "./Android/Samsung";
import Nothing from "./Android/Nothing";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import AdminDashboard from "./Dashboard/AdminDashboard";
import UserDashboard from "./Dashboard/UserDashboard";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhone />} />
        <Route path="/android" element={<Android />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/motorola" element={<Motorola />} />
        <Route path="/oneplus" element={<Oneplus />}/>
        <Route path="/google" element={<Google />}/>
        <Route path="/nothing" element={<Nothing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
