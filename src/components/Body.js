
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () =>{
// Local State Variable - Super powerful variable.
const [ListOfRestaurents,setListOfRestaurents] =  useState(resList);


// Normal js variable

  let ListOfRestaurentsjs = [
{
    "info": {
      "id": "151649",
      "name": "Hotel Sai Nath & Sai Restaurant",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "avgRating":"3.5",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
    }
  },
  {
    "info": {
      "id": "151650", // should have a unique ID
      "name": "Dominos",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "avgRating":"4.5",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
    }
  },
  {
    "info": {
      "id": "151651", // should have a unique ID
      "name": "KFC",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "avgRating":"4.0",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
    }
  }, 
];


 
    return(
      <div className="body">
        <div className="filters">
          <button className="filter-btn" onClick= {() =>{
            //Filter logic here


            const filteredList = ListOfRestaurents.filter(
              (res) => res.info.avgRating >4
            );
            setListOfRestaurents(filteredList);


          } } 
            >
            Top Rated Restaurent 
          </button> 
        </div>
        <div className="search">Search</div>
        <div className="res-container">
          {ListOfRestaurents.map((restaurant) => (
          <RestaurentCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
          
        </div>
      </div>
    )
}


export default Body;
