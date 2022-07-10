import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import category from "../data/category";
import sortList from "../data/sortList";
import Card from '../components/Card';
import classes from "./GamesList.module.css"
import Filter from  "../components/Filter";

const GamesList = (props) => {
    const [platform, setPlatform] = useState({browser: false, pc: true});
    const [categories, setCategories] = useState(category);
    const [sort, setSort] = useState(sortList);
    const [games, setGames] = useState([]);

    let arr = [];
    Object.keys(categories).forEach(key => arr.push(key))
    const allCats = arr.map(category => <p>{category}</p>)

    const navigate = useNavigate();


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b60695f14amshbe33f9fd6323808p190367jsnf9ebb1e8c832',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            .then(response => response.json())
            .then(response => {
                setGames(response)
            })
            .catch(err => console.error(err));
    }, [])

    const handleSelectedGame = (event) => {
        navigate("../games/" + event.currentTarget.id, {replace: true})
    }

    if(games.length !== 0){
        return(
            <section className={classes.GamesList}>
                <h1>{games.length} games found</h1>        
                {games.length !== 0 ? 
                games.map(game => {
                    return (
                    <Card id={game.id} data={game} onClick={handleSelectedGame}></Card>
                    )})
                 : null}
            </section>
        )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }

}

export default GamesList;