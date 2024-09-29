import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constant";

const useRestaurentMenu = (resID)=>{

    const [restInfo,setRestInfo] = useState(null);

    // fetch logic here
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{

        const restData = await fetch(FETCH_MENU_URL+resID);

        const resInfo = await restData.json();

        setRestInfo(resInfo);
    }

    return restInfo;
}

export default useRestaurentMenu;