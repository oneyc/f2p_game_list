import classes from"./Card.module.css"
// import DUMMY_GAME from "../data/dummy_game"

const Card = (props) => {
    return(<div id={props.id} onClick={props.onClick}>
                <div className={classes.card}>
                    <img src={props.data.thumbnail}></img>
                    <h3 className={classes.cardtitle}>{props.data.title}</h3>
                    <p className={classes.carddescription}>{props.data.short_description}</p>
                </div>
            </div>)
}

export default Card;