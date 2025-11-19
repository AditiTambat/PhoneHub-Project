// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Anton&family=Ysabeau+SC:wght@1..1000&display=swap');

//         .navbar {
//           background: linear-gradient(to left, #498a96, #f0f0f0);
//         }
//         .title {
//         font-size: 60px;
//         font-family: "Ysabeau SC", serif;
//         margin-left: 25px;
//         background: linear-gradient(to right, #2b7dd6,  #043464, #2b7dd6);
//         -webkit-background-clip: text; 
//         color: transparent;
//         text-shadow: 1px 1px 3px rgb(26, 36, 85); 
//       }

//         .dropdown-menu {
//           background-color: #495057;
//         }

//         .dropdown-item {
//           color: #ffffff;
//         }

//         .dropdown-item:hover {
//           background-color: #6c757d;
//           color: #ffffff;
//         }

//         .ip-heading {
//           margin-top: 20px;
//           padding: 20px;
//         }

//         @media (max-width: 768px) {
//           .navbar-nav {
//             text-align: center;
//           }

//         }
//       `}</style>

//       <div className="container-fluid p-0">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container-fluid">
//             <Link className="title navbar-brand fw-bold" to="/">
//               PhoneHub
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <div className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>

//                 <div className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle"
//                     href="#"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Select Your Choice
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <Link className="dropdown-item" to="/samsung">
//                         Samsung
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="/google">
//                         Google
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="/motorola">
//                         Motorola
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="/oneplus">
//                         OnePlus
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="/nothing">
//                         Nothing
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <Link to="/login" className="btn d-flex me-2">
//                 Login
//               </Link>
//               <Link to="/signup" className="btn btn-outline-info">
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Ysabeau+SC:wght@1..1000&display=swap');

        .navbar {
          background: linear-gradient(to left, #498a96, #f0f0f0);
        }
        .title {
          font-size: 60px;
          font-family: "Ysabeau SC", serif;
          margin-left: 25px;
          background: linear-gradient(to right, #2b7dd6,  #043464, #2b7dd6);
          -webkit-background-clip: text; 
          color: transparent;
          text-shadow: 1px 1px 3px rgb(26, 36, 85); 
        }
      `}</style>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="title navbar-brand fw-bold" to="/">
              PhoneHub
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link active" to="/">
                  Home
                </Link>

                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Select Your Choice
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/samsung">Samsung</Link></li>
                    <li><Link className="dropdown-item" to="/google">Google</Link></li>
                    <li><Link className="dropdown-item" to="/motorola">Motorola</Link></li>
                    <li><Link className="dropdown-item" to="/oneplus">OnePlus</Link></li>
                    <li><Link className="dropdown-item" to="/nothing">Nothing</Link></li>
                  </ul>
                </div>
              </div>

              {/* ---------- AUTH LOGIC STARTS HERE ---------- */}
              {user ? (
                <>
                  {/* <span className="me-3 fw-bold">
                    Welcome, {user.name}
                  </span> */}

                  <Link 
                    to={user.role === "ADMIN" ? "/admin" : "/user"}
                    className="me-3 fw-bold"
                    style={{ cursor: "pointer",
                    textDecoration: "none",  
                    fontSize: "20px",color: "black" }}
                                  >
                    Welcome, {user.name}
                  </Link>


                  

                  <button
                    className="btn btn-outline-info"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn d-flex me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-info">
                    Sign Up
                  </Link>
                </>
              )}
              {/* ---------- AUTH LOGIC ENDS HERE ---------- */}

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

