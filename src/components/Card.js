import classes from"./Card.module.css"
import DUMMY_GAME from "../data/dummy_game"
import { Navigate } from "react-router-dom"

const Card = (props) => {
    return <div>
        <div className={classes.card}>
            <img src={DUMMY_GAME.thumbnail}></img>
            <h3 className={classes.cardtitle}>{DUMMY_GAME.title}</h3>
            <p className={classes.carddescription}>{DUMMY_GAME.short_description}</p>
        </div>
    </div>
}

export default Card;