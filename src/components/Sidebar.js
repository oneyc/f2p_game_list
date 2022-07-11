import { useState } from "react"
import classes from "./Sidebar.module.css";
import React from "react";

const Sidebar = (props) => {
    
    const [isOpen, setIsOpen] = useState({platform: false, category: false, sort: false});

    const toggleCollapsible = (event) => {
        console.log(event.currentTarget.id)
        console.log(isOpen)
    }

    return (
        <div className={props.sidebarVisibility ? classes.sidebarShown:classes.sidebarHidden}>
            <div className={classes.section}>
                <h3>Platform</h3>
                    <div className={classes.checkboxContainer}>
                        <input type="checkbox" id="PC"/>
                        <label htmlFor="PC">PC</label>
                        <input type="checkbox" id="Browser"/>
                        <label htmlFor="Browser">Browser</label>
                    </div>
            </div>
            <button type="button" id="category" className={classes.collapsible} onClick={toggleCollapsible}>Categories</button>
            {isOpen && (
            <div className={classes.collapsibleList}>
                    <h4>Placeholder</h4>
                    <h4>Placeholder</h4>
            </div>)}
            <div className={classes.section}>
                <h3>Sort</h3>
                    <h4>Release Date</h4>
                    <h4>Popularity</h4>
                    <h4>Alphabetical</h4>
                    <h4>Relevance</h4>
            </div>
        </div>
    )
}

export default Sidebar;