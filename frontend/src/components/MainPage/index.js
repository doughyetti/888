import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundVideo from "../../vids/bg.mp4"
import "./MainPage.css"

const MainPage = () => {
  return (
    <Parallax className="main-parallax-layer" pages={2}>
      <ParallaxLayer className="parallax-layer" offset={0} speed={10} onBlur={5}>
        <div>
          <video autoPlay loop muted className="bg_video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contact-button">
          <h1>Contact Us</h1>
        </div>

      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer" offset={1} speed={10}>
        <h1>hello</h1>
      </ParallaxLayer>
    </Parallax>
  );
};

export default MainPage;
