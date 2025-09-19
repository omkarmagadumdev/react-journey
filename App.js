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
  const{resData} = props

  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} alt="res-logo" />
      <h3>{resData.name}</h3>
     <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.sla.lastMileTravel}</h4>
      <h4>{resData.locality}</h4>
      <h4>{resData.areaName}</h4>
      <h4>{resData.costForTwo}</h4>
      
      
    </div>
  )
};



const resobj = [
  {
"info": {
"id": "151649",
"name": "Hotel Sai Nath & Sai Restaurant",
"cloudinaryImageId": "vkhcohhmqfczycw9vsar",
"locality": "railway station",
"areaName": "Chhindwara Locality",
"costForTwo": "₹200 for two",
"cuisines": [
"North Indian",
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
"avgRating": 4.2,
"veg": true,
"parentId": "101802",
"avgRatingString": "4.2",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 11.3,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "11.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹175 OFF",
"subHeader": "ABOVE ₹699",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
"type": "WEBLINK"
},
},
//next
  {
"info": {
"id": "151648",
"name": "Mr. Gurung Momo & Chinese Corner",
"cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
"locality": "Teacher's Colony",
"areaName": "Mohan Nagar",
"costForTwo": "₹150 for two",
"cuisines": [
"Momos",
"Chinese",
"Fast Food"
],
"avgRating": 4.2,
"veg": true,
"parentId": "140255",
"avgRatingString": "4.2",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 54,
"lastMileTravel": 13.7,
"serviceability": "SERVICEABLE",
"slaString": "50-60 mins",
"lastMileTravelString": "13.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
"type": "WEBLINK"
},

},

{
"info": {
"id": "234875",
"name": "Adil Hotel",
"cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
"locality": "Rautha Wada",
"areaName": "Chhindwara Locality",
"costForTwo": "₹150 for two",
"cuisines": [
"Biryani",
"Tandoor"
],
"avgRating": 4.4,
"parentId": "27123",
"avgRatingString": "4.4",
"totalRatingsString": "1.4K+",
"sla": {
"deliveryTime": 46,
"lastMileTravel": 12.6,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "12.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-20 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
"type": "WEBLINK"
}
},
{
"info": {
"id": "151518",
"name": "Bakery World",
"cloudinaryImageId": "mt2aggiscfl3yviatwng",
"locality": "Parasia Road",
"areaName": "Parasia Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Ice Cream",
"Snacks",
"Beverages"
],
"avgRating": 4.3,
"veg": true,
"parentId": "40363",
"avgRatingString": "4.3",
"totalRatingsString": "293",
"sla": {
"deliveryTime": 50,
"lastMileTravel": 14.1,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "14.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 22:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
"type": "WEBLINK"
}
},
{
"info": {
"id": "658210",
"name": "The Fusion Lounge",
"cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
"locality": "Triloki nagar",
"areaName": "Railway Station",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
"avgRating": 4.1,
"parentId": "395453",
"avgRatingString": "4.1",
"totalRatingsString": "367",
"sla": {
"deliveryTime": 67,
"lastMileTravel": 12.4,
"serviceability": "SERVICEABLE",
"slaString": "65-75 mins",
"lastMileTravelString": "12.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
"type": "WEBLINK"
}
},
{
"info": {
"id": "151515",
"name": "Gupta Bhojnalay",
"cloudinaryImageId": "jo9pdipf4elcuch8g55q",
"locality": "fulwara chowk",
"areaName": "Chhindwara Locality",
"costForTwo": "₹200 for two",
"cuisines": [
"Fast Food",
"Indian",
"Beverages"
],
"avgRating": 4.2,
"veg": true,
"parentId": "91635",
"avgRatingString": "4.2",
"totalRatingsString": "454",
"sla": {
"deliveryTime": 56,
"lastMileTravel": 13.5,
"serviceability": "SERVICEABLE",
"slaString": "55-65 mins",
"lastMileTravelString": "13.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹999",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
"type": "WEBLINK"
}
},
{
"info": {
"id": "522144",
"name": "Blue Chilli Restaurant",
"cloudinaryImageId": "je6qlse8csxgcfpuoybe",
"locality": "Ambedkar Nagar",
"areaName": "Prasia Road",
"costForTwo": "₹150 for two",
"cuisines": [
"South Indian",
"Indian",
"Fast Food"
],
"avgRating": 3.7,
"veg": true,
"parentId": "311804",
"avgRatingString": "3.7",
"totalRatingsString": "229",
"sla": {
"deliveryTime": 58,
"lastMileTravel": 13,
"serviceability": "SERVICEABLE",
"slaString": "55-65 mins",
"lastMileTravelString": "13.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹120"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/blue-chilli-restaurant-ambedkar-nagar-prasia-road-rest522144",
"type": "WEBLINK"
}
},
{
"info": {
"id": "625927",
"name": "Kathi Junction",
"cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
"locality": "Bunglow Madhuvan Colony",
"areaName": "Prasia Road",
"costForTwo": "₹200 for two",
"cuisines": [
"rolls",
"Burgers",
"Pizzas",
"Fast Food"
],
"avgRating": 4.2,
"parentId": "1935",
"avgRatingString": "4.2",
"totalRatingsString": "400",
"sla": {
"deliveryTime": 58,
"lastMileTravel": 13.7,
"serviceability": "SERVICEABLE",
"slaString": "55-65 mins",
"lastMileTravelString": "13.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-19 23:15:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-e379770b-3d77-4af7-a761-fa4ab0e01b5d"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
"type": "WEBLINK"
}
},

];


const Body = () =>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurentCard resData = {resobj[0].info}/>
          <RestaurentCard resData = {resobj[1].info}/>
          <RestaurentCard resData = {resobj[2].info}/>
          <RestaurentCard resData = {resobj[3].info}/>
          <RestaurentCard resData = {resobj[4].info}/>
          <RestaurentCard resData = {resobj[5].info}/>
          <RestaurentCard resData = {resobj[6].info}/>
          <RestaurentCard resData = {resobj[7].info}/>
          
         
          

          
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
