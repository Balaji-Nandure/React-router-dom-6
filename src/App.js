/** @format */
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route
                        path='/products'
                        element={<Products></Products>}></Route>
                    <Route
                        path='/products/:productId'
                        element={<SingleProduct />}></Route>
                    <Route
                        path='/login'
                        element={<Login setUser={setUser} />}></Route>
                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoute user={user}>
                                <Dashboard user={user} />
                            </ProtectedRoute>
                        }></Route>
                    <Route path='*' element={<Error></Error>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
