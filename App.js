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


const Header =()=>{
  return(
    <div className="header">
       <div className="logo-container" >
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K8f8hdrZw-SfHxZSG0GogsRClYEHyAqGEg&s" alt="" />
       </div>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
       </div>
    </div>
  )

}
// const stylecard = 

const RestaurentCard =(props)=>{
  console.log(props);

  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG" alt="res-logo" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.3</h4>
      <h4>55-65 mins</h4>
    </div>
  )
}
const Body = () =>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurentCard
           resName="Pizza Hut"
           cuisine ="Burger,FastFood"
           
          />
          <RestaurentCard  resName="KFC" cuisine ="Burger,Fast Food"/>
          
        </div>
      </div>
    )
}
const AppLayout = () =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
