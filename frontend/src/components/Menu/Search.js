import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import "./Menu.css";

const Search = () => {
  const dispatch = useDispatch();

  const menu = useSelector(state => Object.values(state.menu));

  const itemsArr = [];
  menu.map((menu) => (
    itemsArr.push(...menu.Items)
  ));

  const [query, setQuery] = useState("")

  const show = () => {
    document.querySelector(".search-results").classList.remove("hidden");
  };

  const hide = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      document.querySelector(".search-results").classList.add("hidden");
    };
  };

  const addToCart = (item) => {
    const { id, name, price } = item;

    const clearInput = document.getElementById("search-input");
    clearInput.value = "";
    setQuery("");

    dispatch(cartActions.addItem({
      id,
      name,
      price
    }));
  };

  return (
    <div className="search-container">

      <div className="search-bar" onBlur={(e) => hide(e)}>
        <input onChange={(e) => setQuery(e.target.value)} onFocus={() => show()} className="search-input" type="text" placeholder="Search..." id="search-input"></input>
      </div>
      <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>

      <div className="search-results hidden">
        {itemsArr.filter(item => {
          if (query === "") {
            return null;
          } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
            return itemsArr;
          }
        }).map((listing, idx) => (
          <div className="search-results-box" key={idx}>
            <div className="search-card" onMouseDown={() => addToCart(listing)}>
              <span>{listing.name}</span>
              <hr className="search-card-bar"></hr>
              <span>${listing.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Search;
