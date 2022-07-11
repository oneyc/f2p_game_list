import React, { useState } from "react";
import classes from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import category from "../data/category";
import sortList from "../data/sortList";

const Header = (props) => {

    const [platform, setPlatform] = useState({browser: false, pc: true});
    const [categories, setCategories] = useState(category);
    const [sort, setSort] = useState(sortList);
    let arr = [];
    Object.keys(categories).forEach(key => arr.push(key))
    const allCats = arr.map(category => <p>{category}</p>)

    const navigate = useNavigate();
    const SidebarHandler = () => {
        console.log("SidebarHandler clicked")
        props.setSidebar()
    }

    const redirectHomeHandler = () => {
        navigate("/games", {replace: true})
    }
    return(
        <div className={classes.header}>
            <div className={classes.bugericon} onClick={SidebarHandler}>
                <span className={classes.burger}/>
                <span className={classes.burger}/>
                <span className={classes.burger}/>
            </div>
            <h3 className={classes.logo} onClick={redirectHomeHandler}>F2P!</h3>
        </div>
    )
}

export default Header;