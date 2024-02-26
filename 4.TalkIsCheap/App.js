import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="logo"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, stars, time, cuisine }) => {
  return (
    <div className="res-card">
      <img
        className="card-img"
        src="https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900"
        alt="food_image"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <label>Search</label>
        <input type="text" />
      </div>
      <div className="res-container">
        <RestaurantCard
          name="KFC"
          stars={4.3}
          time="20 min"
          cuisine="Fast Foods"
        />
        <RestaurantCard
          name="Fresh Foods"
          stars={4.3}
          time="30 min"
          cuisine="Biryani, North Indian, Asian"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
