import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { FaTrash } from "react-icons/fa";
import { clearCart } from "../utils/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {

    const dispatch = useDispatch();

    function clickHandler(){
        dispatch(clearCart());
    }


    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="w-[100%] mt-6 flex justify-center items-center flex-col">
            <div>
                {cartItems.length!=0 && <div className="flex gap-x-4 mb-4">
                    <h1 className="font-bold text-4xl">Cart</h1>
                    <button onClick={clickHandler} className="px-3 py-1 bg-black text-white font-semibold rounded-md text-2xl">Clear Cart</button>
                </div>}
            </div>
            <div className="">
                {cartItems.length===0 && 
                <div className="relative z-0 flex justify-center items-center">
                    <h1 className="absolute top-[140px] left-[115px] text-white font-semibold z-10 text-3xl">Add items to cart !</h1>
                    <span className="text-[400px] z-0"><FaShoppingCart/></span>
                </div>} 
                <Menu selectCategory = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart;