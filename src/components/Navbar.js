import {Link, useLocation} from "react-router-dom"

import { useState } from "react";
import Sidebar from "./Sidebar";

import{faHome, faList, faMap ,faCog, faTruck} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSideBar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        }, 
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Maps",
            path: "/map",
            icon: faMap
        },
        {
            name: "Shopping",
            path: "http://gcategory.gmarket.co.kr/Listview/Category?GdlcCd=100000020",
            icon: faCog
        },
        {
            name: "Delivery",
            path: "https://baemin.com/",
            icon: faTruck
        },
    ]

    function closeSidebar(){
        setShowSideBar(false)
    }

    return(
        <>
            <div className="navbar container">
                <a href="#!" className="logo">EasyC<span>oo</span>k</a>
                <div className="nav-links">
                    { links.map(link=>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={()=> setShowSideBar(true)} className={showSidebar ? "sidebar-btn active":"sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {showSidebar && <Sidebar close = {closeSidebar} links={links}/>}
            </div>
        </>
    )
}