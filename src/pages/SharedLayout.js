/** @format */

import { Link, Outlet } from "react-router-dom";
import { StyledNavbar } from "../components/StyledNavbar";

const Home = () => {
    return (
        <>
            <StyledNavbar></StyledNavbar>
            <Outlet></Outlet>
        </>
    );
};
export default Home;
