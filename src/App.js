import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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
