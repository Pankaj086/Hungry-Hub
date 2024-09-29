import React from 'react';
import { CDN_URL } from '../utils/constant';
import { FcRating } from "react-icons/fc";
import { MdOutlineAccessTime } from "react-icons/md";

const Card = (props) => {
    const resData = props.resData;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime,
        sla
    } = resData?.info;

    const cuis = cuisines?.join(", ") || "Unknown";

    return (
        <div className='w-[250px] bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out overflow-hidden mb-5'>
            <img
                src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : '/placeholder-image.jpg'}
                alt={name || 'Restaurant'}
                className='h-[160px] w-full object-cover'
            />

            <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-900 truncate'>
                    {name?.length > 20 ? name.substring(0, 20) + "..." : name || "Unknown Restaurant"}
                </h2>

                <h3 className='text-lg text-gray-700 mt-2 h-[48px] leading-tight'>
                    {cuis.length > 40 ? cuis.substring(0, 40) + "..." : cuis}
                </h3>

                <div className='flex items-center justify-between mt-3'>
                    {avgRating && (
                        <div className='flex items-center space-x-1'>
                            <FcRating />
                            <span className='text-lg text-yellow-500 font-semibold'>{avgRating}</span>
                        </div>
                    )}
                    <div className='flex gap-x-1 justify-center items-center'>
                    <span><MdOutlineAccessTime/></span>
                    <span className='text-md text-gray-600 font-semibold'> {sla?.deliveryTime || deliveryTime} min</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
