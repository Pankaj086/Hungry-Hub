import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Restaurentmenu from "./Restaurentmenu";
// import "./Restaurent.css";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import useCategory from "../utils/useCategory";

const Restaurent = () => {

    const { resID } = useParams();
    
    const restInfo = useRestaurentMenu(resID);
    const categories = useCategory(restInfo);
    
    if(restInfo===null) return <Shimmer/>

    console.log("restData",restInfo);

    const { name, cuisines} = restInfo.data.cards[2].card.card.info;
    
    return(
        <div className="mt-6">
            <h1 className="text-center text-5xl font-semibold mb-2">{name}</h1>
            <h2 className="text-center text-2xl font-semibold mb-6">Cuisines: {cuisines.join(", ")}</h2>
            <Restaurentmenu categories={categories}/>
        </div>
    )
    
    
};

export default Restaurent;