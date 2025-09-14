import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search
 * - Restaurant container
 *    - Restaurant card
 *       - img
 *       - Name, rating, cuisines, delivery time, cost, locality, promo
 * 
 * Footer (optional later)
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
          alt="brand"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const{
  img = "https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg",
  name = "Meghana Foods",
  cuisines = "Biryani, North Indian, Asian",
  rating = "4.4",
  eta = "45–55 mins",
  cost = "₹300 for two",
  locality = "Chhindwara Locality",
  offer = "₹175 OFF ABOVE ₹699",
} = props   
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={img} />
      <div className="ribbon">{offer}</div>
      <h3>{name}</h3>
      <p className="cuisines">{cuisines}</p>
      <div className="meta">
        <span className="rating">
          <span className="badge"></span>
          {rating}
        </span>
        <span className="sep">•</span>
        <span>{eta}</span>
        <span className="sep">•</span>
        <span>{cost}</span>
      </div>
      <p className="locality">{locality}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="Meghana Foods"
          cuisines="Biryani, North Indian, Asian"
          rating="4.4"
          eta="45–55 mins"
          cost="₹300 for two"
          locality="Chhindwara Locality"
          offer="₹175 OFF ABOVE ₹699"
        />
        <RestaurantCard
          name="KFC"
          cuisines="Burgers, Fast Food"
          rating="4.2"
          eta="30–40 mins"
          cost="₹400 for two"
          locality="City Center"
          offer="₹100 OFF ABOVE ₹499"
          img="https://www.shutterstock.com/image-photo/delicious-vegetarian-burger-fresh-toppings-600nw-2623526417.jpg"
        />
        <RestaurantCard
          name="Domino’s Pizza"
          cuisines="Pizza, Italian"
          rating="4.1"
          eta="25–35 mins"
          cost="₹350 for two"
          locality="MG Road"
          offer="50% OFF UPTO ₹100"
          img="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
        />
        <RestaurantCard
          name="Subway"
          cuisines="Healthy, Sandwich"
          rating="4.0"
          eta="35–45 mins"
          cost="₹300 for two"
          locality="Market Area"
          offer="₹150 OFF ABOVE ₹699"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6_9u0TnWDghsXKG2BvWsUhij4XHBNYjCdA&s"
        />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
