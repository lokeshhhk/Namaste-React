import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(restaurantList)
    setFilteredRestaurant(restaurantList)
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className="search-btn"onClick={() => {
          const searchFilter = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
          )
          setFilteredRestaurant(searchFilter)
          console.log(searchText)
        }}>Search</button>
        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map(restaurant => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;