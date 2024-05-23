
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    const[basket,setBasket]=useState([]);
    const[wishlist,setWishlist]=useState([])
    const router = createBrowserRouter(ROUTES);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/vine")
        .then((res)=>setdata([...res.data]))
    },[])
    return (

        <>
        <MainContext.Provider value={{data, setdata, loading, setLoading, error, setError,basket,setBasket,wishlist ,setWishlist}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
