import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * body
 * - Search
 * - restarunt cotainer
 *      - Restaurant card
 *          - img
 *          - Name of res,Star Rating,cuisines,delivery tie
 * footer
 * - copyright
 * - link
 * - Adress
 * - contact information
 * 
 */
const Header = () =>{
    return(
        <div className="header" >
            <div className="logo-container" >
               <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" alt="brand"/>
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg" />
                <div className="ribbon">₹175 OFF ABOVE ₹699</div>
                <h3>Meghana Foods</h3>
                <p className="cuisines">Biryani,North Indian,Asian</p>
                <div className="meta">
                  <span className="rating"><span className="badge"></span>4.4</span>
                  <span className="sep">•</span>
                  <span>45–55 mins</span>
                  <span className="sep">•</span>
                  <span>₹300 for two</span>
                </div>
                <p className="locality">Chhindwara Locality</p>
                    
        </div>
    )
}


const Body = () =>{
       return(
        <div className="body" >
            <div className="search" >Search</div>
            <div className="res-container" >
                <RestaurantCard resName = "meghana food"
                cousines="Biryani,North Indian,Asians/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
       )  
}
const AppLayout = () =>{
   return(
    <div className="app" >
        <Header/>
        <Body />
    </div>
   );
};



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);
