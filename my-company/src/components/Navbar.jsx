import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      backgroundColor: "navy", 
      padding: "10px" 
    }}>
      <h2 style={{ color: "white" }}>My Company</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>About</Link>
        <Link to="/services" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Services</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
