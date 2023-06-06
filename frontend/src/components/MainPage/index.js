import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundVideo from "../../vids/bg.mp4"
import About from "../About";
import { getMenuThunk } from "../../store/menu";
import "./MainPage.css"

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);

  return (
    <Parallax className="main-parallax-layer" pages={3}>
      <ParallaxLayer id="home-section" className="parallax-layer layer-0" offset={0} speed={1} strength={800}>
        <div>
          <video autoPlay loop muted className="bg_video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contact-button">
          <h1 id="contact-button">CONTACT US</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer id="about-section" className="parallax-layer layer-1" offset={1} speed={1} strength={800}>
        <About />
      </ParallaxLayer>

      <ParallaxLayer id="menu-section" className="parallax-layer layer-1" offset={2} speed={1} strength={800}>
        
      </ParallaxLayer>
    </Parallax>
  );
};

export default MainPage;
