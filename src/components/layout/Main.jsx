import { Outlet } from "react-router";
import Header from "../header/Header";



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;