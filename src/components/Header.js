import React, { useContext, useState } from 'react'
import bg from '../../images/bg.png'
// import "./Header.css";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = ()=>{
    const [loginButton,setLoginButton] = useState(false);

    const onlineStatus = useOnlineStatus();

    const User = useContext(UserContext);
    // console.log("user",User);

    // selector subscribing to the store using selector
    const cartItems = useSelector((store)=> store.cart.items);


    

    function clickHandler(){
        setLoginButton(!loginButton);
        // if(loginButton) console.log("login");
        // else console.log("logout");
    }

    return(
        <div className='flex justify-between pl-4 bg-red-200 items-center shadow-lg'>
            <span className=''>
                <img className='w-[8rem] h-[8rem] ml-[-0.5rem] mt-[-1rem] mb-[-1rem]' src={bg}/>
            </span>

            <div className='nav-items'>
                <ul className='flex p-4 font-semibold'>
                    <li className='px-4 text-xl'>
                        Online Status {
                            (onlineStatus) ? "✅" : "❌"
                        }
                    </li>
                    <li className='px-4 text-xl'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-4 text-xl'>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className='px-4 text-xl'>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='px-4 text-xl'>
                        <Link to="/cart" className='flex justify-between items-center gap-x-2'>
                            <span><FaShoppingCart/></span>
                            <span>Cart({cartItems.length})</span>
                        </Link>
                    </li>
                    {/* <li className='px-4 text-2xl'>Cart</li> */}
                    <li className='px-4 text-xl'>
                        {
                            loginButton==true ?
                            <button className='px-3 py-1 bg-black text-white  rounded-md shadow-lg hover:bg-opacity-90' onClick={clickHandler}>
                                Logout
                            </button> :
                            <button className='px-2 py-1 bg-black text-white rounded-md shadow-lg hover:bg-opacity-90' onClick={clickHandler}>
                                Login
                            </button>
                        }
                    </li>
                    {/* <li className='text-xl'>{User.loggedInUser}</li> */}
                </ul>
            </div>

        </div>
    )
}

export default Header;