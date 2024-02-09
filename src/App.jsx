import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ItemViewPage from "./pages/ItemViewPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import BuyerSignInPage from "./pages/BuyerSignInPage.jsx";
import ArtistSignInPage from "./pages/ArtistSignInPage.jsx";
import ArtistProfilePage from "./pages/ArtistProfilePage.jsx";
import ArtworkAddPage from "./pages/ArtworkAddPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ArtworkMainFilter from './components/artwork-filter/ArtworkMainFilter.jsx';
import Purchases from './pages/Purchases.jsx';
import { useEffect } from 'react';


const router = createBrowserRouter([
    {
        path: '/', element: <HomePage />
    },
    {
        path: '/cart', element: <CartPage />
    },
    {
        path: '/purchases', element: <Purchases />
    },
    {
        path: '/artwork/*', element: <ItemViewPage />
    },
    {
        path: '/sign-in', element: <SignInPage />
    },
    {
        path: '/login', element: <LoginPage />
    },
    {
        path: '/buyer-sign-in', element: <BuyerSignInPage />
    },
    {
        path: '/artist-sign-in', element: <ArtistSignInPage />
    },
    {
        path: '/artist/profile/*', element: <ArtistProfilePage />
    },
    {
        path: '/artwork/add', element: <ArtworkAddPage />
    },
])


function App() {

    return (<RouterProvider router={router} />)
}

export default App