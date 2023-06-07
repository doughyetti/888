import menuBackgroundVideo from "../../vids/menu-bg.mp4"
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-main-container">
      <video autoPlay loop muted className="menu_bg_video">
        <source src={menuBackgroundVideo} type="video/mp4" />
      </video>

    </div>
  );
};

export default Menu;
