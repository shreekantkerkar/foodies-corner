import Shimmer from "./Shimmer";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Body = () => {
  //local state varaibles => super powerful variables
  const [restaurantlist, setrestaurentlist] = useState([]);
  const [filteredList, setfilteredList] = useState([]);

  // console.log(restaurantlist);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withOpenLabel(RestaurantCard);

  //normal js variable
  // let listofRestaurants = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)

    setrestaurentlist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>OOPS Internet Connection Lost !</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return restaurantlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-center">
        <div className="m-4 p-4 font-[Poppins] italic">
          <input
            size={40}
            placeholder=" Search for restaurants and food "
            type="text"
            className="border h-[40px] w-[440px] border-solid border-black font-bold px-3"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              const filteredRes = restaurantlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filteredRes);
            }}
          />
          <button
            className="px-4 py-2 rounded-lg  bg-green-200 hover:bg-green-100 m-4 font-[Poppins] font-bold "
            onClick={() => {
              //filter the restaurent card and update the ui
              const filteredRes = restaurantlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // //res.info.cuisines.some((cuisine) =>
              // //cuisines.toLowerCase().includes(searchText.toLowerCase())
              // const cuisineMatch = restaurantlist.filter((res) =>
              //   res.info.cuisines.some((cuisine) =>
              //     res.info.cuisines.toLowerCase().includes(searchText.toLowerCase())
              //   )
              // );
              setfilteredList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-200 rounded-lg  hover:bg-green-100 font-[Poppins] font-bold"
            onClick={() => {
              const filteredList = restaurantlist.filter(
                (res) => res.info.avgRating > 4
              );
              setrestaurentlist(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        {/* <div className="m-4 p-4 flex items-center">
          <label> UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;