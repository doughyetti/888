import { Parallax, Background } from "react-parallax";
import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuThunk } from "../../store/menu";
import menuBg from "../../vids/menu-bg.mp4"
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();

  const menuArr = useSelector(state => state.menu.Menus);

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);

  return (
    <Parallax  className="parallax-layer" strength={800}>
      <Background>
        <video autoPlay loop muted className="video-bg">
          <source src={menuBg} type="video/mp4" />
        </video>
      </Background>

      <div id="menu-section" className="main-container">
        <div className="menu-container">
          <div className="menu-headers-container">
            <ul className="menu-list">
              {menuArr && menuArr.map((menu) => (
                <li key={menu.id}>{menu.type}</li>
              ))}
            </ul>
          </div>

          <div className="menu-items-container">
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Menu;
