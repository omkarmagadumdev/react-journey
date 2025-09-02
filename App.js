
import React from "react"
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
            <div className="logo-conatiner" >
               <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
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
        <div className="res-card" style={{backgroundColor:"0f0f0f"}}>
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg" />
                <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () =>{
       return(
        <div className="body" >
            <div className="search" >Search</div>
            <div className="res-container" >
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

