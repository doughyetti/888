import { Parallax, Background } from "react-parallax";
import { Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuThunk } from "../../store/menu";
import { cartActions } from "../../store/cart";
import Search from "./Search";
import menuBg from "../../vids/menu-bg.mp4"
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();

  const menuArr = useSelector(state => Object.values(state.menu));
  const starters = menuArr[0];
  const noods = menuArr[1];
  const signature = menuArr[2];
  const drinks = menuArr[3];

  const [filter, setFilter] = useState("Starters")
  const [menuType, setMenuType] = useState('')

  const addToCart = (item) => {
    const { id, name, price, previewPhoto } = item;

    dispatch(cartActions.addItem({
      id,
      name,
      price,
      previewPhoto
    }))
  };

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!menuType) {
      setMenuType(starters);
    }
  }, [menuArr]);

  useEffect(() => {
    if (filter === "Starters") {
      setMenuType(starters);
    };

    if (filter === "Noodle Soup") {
      setMenuType(noods);
    };

    if (filter === "Chef's Signature") {
      setMenuType(signature);
    };

    if (filter === "Drinks") {
      setMenuType(drinks);
    };
  }, [filter]);

  return (
    <Parallax  className="parallax-layer" strength={800}>
      <Background>
        <video autoPlay loop muted className="video-bg">
          <source src={menuBg} type="video/mp4" />
        </video>
      </Background>

      <Container id="menu-section" className="main-container">
        <Row className="menu-container">
          <div className="menu-headers-container">
            <div className="menu-list">
              {menuArr.length && menuArr.map((menu) => (
                <button key={menu.id} className={`filter-btn ${filter === menu.type ? "active-btn" : ""}`} onClick={() => setFilter(menu.type)}>{menu.type}</button>
              ))}
            </div>

            <Search />
          </div>

          <div className="items-list-container">
            {menuType && menuType.Items.map((item) => (
              <div className="items-list" key={item.id}>
                <div className="item-title">
                  <h2>{item.name}</h2>
                  <h4>${item.price}</h4>
                </div>

                <div className="item-info">
                  <p>{item.description}</p>
                  <button className="add-cart-btn" onClick={() => addToCart(item)}><i className="fa-solid fa-cart-plus"></i></button>
                </div>

                <div className="item-pic">
                  <img src={item.previewPhoto} alt="item"></img>
                </div>
              </div>
            ))}
          </div>

        </Row>
      </Container>
    </Parallax>
  );
};

export default Menu;
