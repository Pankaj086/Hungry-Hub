import React from "react";
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const Menu = (props) => {
    const {selectCategory} = props;

    const dispatch = useDispatch();
    
    // console.log("our menu category",selectCategory);

    function clickHandler(item){
        dispatch(addItem(item));
        console.log(item);
        
    }
    

    return (
        <div className="menuCard">
            {
                selectCategory.map((item,index)=>{
                    const{
                        name,
                        price,
                        defaultPrice,
                        imageId,
                        description,
                    } = item?.card?.info;
                    return(
                        <div key={index} className="flex w-6/12 mx-auto px-4  bg-white border-b-4 border-gray-100 items-center justify-between pb-8 pt-4">

                            <div className="flex flex-col gap-4  max-w-[60%] pt-2" >

                                <h3 className="text-xl font-semibold">{name}</h3>

                                <h3 className="font-semibold">₹{price/100 || defaultPrice/100}</h3>

                                <h3 className="text-base pb-4">{description}</h3>

                            </div>
                            <div className="relative flex flex-col items-center">
                                <img src={IMG_URL+imageId} 
                                className="h-[144px] w-[156px] rounded-lg"/>

                                <button onClick={()=>clickHandler(item)} className="absolute px-10 py-1 text-green-600 rounded-md shadow-lg  bg-white text-lg font-bold -bottom-4 hover:bg-gray-100 hover:scale-95 transition duration-300 ease-in-out transform">ADD</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Menu;
