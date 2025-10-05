
import RestaurentCard from "./RestaurentCard";
import { useState , useEffect} from "react";
import resList from "../utils/mockData";

const Body = () =>{
// Local State Variable - Super powerful variable.
const [ListOfRestaurents,setListOfRestaurents] =  useState(resList);
// const [ListOfRestaurents,setListOfRestaurents] = arr;

// const ListOfRestaurents =  arr[0]
// const arsetListOfRestaurents = arr[1]
useEffect(()=>{
    fetchData();

},[])

// Normal js variable

 const fetchData = () =>{
      const data = fetch();
 }
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
