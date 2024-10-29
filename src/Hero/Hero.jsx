import darkArrow from "../assets/edusity/dark-arrow.png";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For Better World</h1>
        <p>
          We ensure better education for better world our cutting-edge curriclum
          is designed to empower students with knowledge , skill and experincess
        </p>
        <button className="btn">
          Explore more <img src={darkArrow}></img>
        </button>
      </div>
    </div>
  );
};
export default Hero;
