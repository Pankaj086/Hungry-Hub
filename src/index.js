import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Container from './components/Container';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from "./components/Error";
import Restaurentmenu from './components/Restaurent';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

// Lazy load the Contact component
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
    const [userName, setUserName] = useState("Default User");

    useEffect(()=>{
        let data = {
            name : "Pankaj",
        };
        setUserName(data.name);    
    },[])
    
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName}}>
                <div className='app bg-[#ffffff]'>
                    <Header />
                    <Outlet />
                </div>
        </UserContext.Provider>
        </Provider>
    );
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Container />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                // Wrap the lazy-loaded Contact component with Suspense
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Contact />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/restaurent/:resID",
                element: <Restaurentmenu />,
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
