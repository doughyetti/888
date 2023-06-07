import { Parallax, Background } from "react-parallax"
import { useDispatch } from "react-redux";
import homeBg from "../../vids/bg.mp4";
import "./HomePage.css"

const HomePage = () => {
  return (
    <Parallax className="parallax-layer" strength={800}>
      <Background>
        <video autoPlay loop muted className="video-bg">
          <source src={homeBg} type="video/mp4" />
        </video>
      </Background>

      <div id="home-section" className="main-container">
        <div className="contact-button">
          <h1 id="contact-button">CONTACT US</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default HomePage;
