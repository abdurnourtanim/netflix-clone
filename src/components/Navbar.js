import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", this);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netflix Logo"
        className="nav__logo"
      />
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrG9zEOlJvCWAQSVskkkebS6RKHm9MO8mPb5gGfoMVvWxEPlQ3FH_GibcoHy_eW8YZP_c&usqp=CAU"
        alt="Netflix Logo"
        className="nav__avater"
      /> */}
      <div className="nav__avater">
        <Button variant="contained" color="secondary">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
