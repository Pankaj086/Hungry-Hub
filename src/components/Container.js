import React, { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
// import "./Container.css";
import { Link } from 'react-router-dom';
import { API_URL } from '../utils/constant';
import useOnlineStatus from '../utils/useOnlineStatus';

const Container = () => {
    let [newRes, setNewRes] = useState([]);

    let [searchText, setSearchText] = useState("");

    let [tempdata, setTempData] = useState([]);

    useEffect(()=>{
        fecthData();
    },[])

    const fecthData = async ()=>{
        const newdata = await fetch(API_URL);
        // console.log(newdata)
        
        const result = await newdata.json();
        console.log("result " , result);
        
        
        // Extract the restaurant data from the response
        const restaurants = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setTempData(restaurants);

        if (restaurants) {
            setNewRes(restaurants);
        } else{
            console.log("Restaurants data not found");
        }
    }

    console.log(newRes,"newres");
    

    const onlineStatus = useOnlineStatus();

    if(onlineStatus==false){
        return <h1>Please check yur internet connection</h1>
    }
    
    function clickHandler() {
        const newList = newRes.filter((rest) => 
            (rest.info.avgRating > 4.3)
        );
        setTempData(newList);
    }

    function changeHandler(e){
        setSearchText(e.target.value);
    }

    function btnHandler(){
        tempdata = newRes.filter((res)=>(
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        ))
        setTempData(tempdata);
    }

    return newRes.length===0 ? <Shimmer/> : (
        <div className='body'>
            <div className="flex justify-evenly items-center my-6">
    <div className="flex space-x-2">
        <input
            type="text"
            placeholder="Search for Food and Restaurants"
            value={searchText}
            className="border border-gray-300 w-[30rem] rounded-lg py-1 pl-4 text-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            onChange={changeHandler}
        />
        <button
            className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-700 text-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={btnHandler}
        >
            Search
        </button>
    </div>

    <div>
        <button
            className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-700 text-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={clickHandler}
        >
            Top Rated Restaurants
        </button>
    </div>
</div>


            <div className='flex flex-wrap px-28 justify-between gap-y-4'>
                {
                    tempdata.map((rest) => (
                        <Link 
                            key={rest.info.id}
                            to={"/restaurent/"+rest.info.id}><Card resData={rest} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Container;
