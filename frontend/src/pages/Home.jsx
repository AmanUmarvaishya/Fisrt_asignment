import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <h2>Welcome to home</h2>
      <button onClick={handleClick} className="home-btn">
        Logout
      </button>
    </>
  );
}
