import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundVideo from "../../vids/bg.mp4"
import About from "../About";
import "./MainPage.css"

const MainPage = () => {
  return (
    <Parallax className="main-parallax-layer" pages={2}>
      <ParallaxLayer className="parallax-layer layer-0" offset={0} speed={0} strength={300}>
        <div>
          <video autoPlay loop muted className="bg_video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contact-button">
          <h1 id="contact-button">CONTACT US</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer layer-1" offset={1} speed={1} strength={300} factor={2}>
        <About />
      </ParallaxLayer>
    </Parallax>
  );
};

export default MainPage;
