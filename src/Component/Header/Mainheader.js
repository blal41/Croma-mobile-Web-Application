import React from "react";
import classes from "./Mainheader.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/authcontext";
import { useContext, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function Mainheader() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const { searchTerm, setSearchTerm } = authCtx;
  const [menuOpen, setMenuOpen] = useState(false);
  
  const logoutHandler = () => {
    authCtx.logout();
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };


  return (
    <nav className={classes.header}>
      <NavLink to="/home" className={classes.title}>
      {<PhoneIphoneIcon fontSize="large" className={classes.logo}/>}
      PixelPulse 
      </NavLink>
      <div className={classes.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.search_container}>
        <input
          type="text"
          className={classes.search_input}
          placeholder="what are you looking for ?"
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className={classes.search_icon}>🔍</span>
      </div>
      <ul className={menuOpen ? classes.open : ""}>
        <li>
          <NavLink to="/" className={classes.custom_link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={classes.custom_link}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={classes.custom_link}>
            Cart
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink to="/login" className={classes.custom_link}>
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler} className={classes.logout}>
              {" "}
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );

  // const logoutHandler = () => {
  //   authCtx.logout();
  // };

  // const handleSearch = (e) => {
  //   console.log(e.target.value);
  //   setSearchTerm(e.target.value);
  // };

  // return (
  //   <nav className={classes.navbaritems}>
  //     <h1 className={classes.logo}>CROMA</h1>

  //     <div className={classes.search_container}>
  //       <input
  //         type="text"
  //         className={classes.search_input}
  //         placeholder="what are you looking for ?"
  //         value={searchTerm}
  //         onChange={handleSearch}
  //       />
  //       <span className={classes.search_icon}>🔍</span>
  //     </div>
  //     <div className={classes.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
  //       {<MenuIcon />}

  //     </div>

  //     <ul className={menuOpen ? classes.nav_menu : ''}>
  //       <li>
  //         <NavLink to="/" className={classes.custom_link}>
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/product" className={classes.custom_link}>
  //           Product
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/cart" className={classes.custom_link}>
  //           Cart
  //         </NavLink>
  //       </li>
  //       {!isLoggedIn && (
  //         <li>
  //           <NavLink to="/login" className={classes.custom_link}>
  //             Login
  //           </NavLink>
  //         </li>
  //       )}
  //       {isLoggedIn && (
  //         <li>
  //           <button onClick={logoutHandler} className={classes.logout}>
  //             {" "}
  //             Logout
  //           </button>
  //         </li>
  //       )}
  //     </ul>
  //   </nav>
  // );
}

export default Mainheader;
