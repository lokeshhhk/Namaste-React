import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body =()=>{
const [listOfRestaurants,setListOfRestaurant]=useState([])

useEffect(()=>{
  fetchData();
},[])

const fetchData = async()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json=await data.json();
  console.log(json);

  const restaurantslist=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  setListOfRestaurant(restaurantslist)
  console.log(restaurantslist)
}

if(listOfRestaurants.length ===0)
{
  return (
    <div>
      <h1>loadinggg</h1>
    </div>  
)
}
   
return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (res)=>res.info.avgRating>4
            );
            setListOfRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map(restaurant=>(
            <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
          ))}
        </div>
      </div>
    )
}

export default Body;