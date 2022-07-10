import React, { useState }  from "react";
import category from "../data/category";
import sortList from "../data/sortList";
import Card from '../components/Card';
import classes from "./GamesList.module.css"
import Filter from  "../components/Filter";

const GamesList = (props) => {
    const [platform, setPlatform] = useState({browser: false, pc: true});
    const [categories, setCategories] = useState(category);
    const [sort, setSort] = useState(sortList);
    
    let arr = [];
    Object.keys(categories).forEach(key => arr.push(key))
    const allCats = arr.map(category => <p>{category}</p>)

    return(
        <section className={classes.GamesList}>
            {/* <Filter/> */}
            <h1>GamesList</h1>        
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

export default GamesList;