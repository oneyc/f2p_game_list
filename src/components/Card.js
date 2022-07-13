import classes from"./Card.module.css"
import 'boxicons'
// import DUMMY_GAME from "../data/dummy_game"

const Card = (props) => {
    return(<div key={props.id} className={classes.card} id={props.id} onClick={props.onClick}>
                <img src={props.data.thumbnail}></img>
                    <div className={classes.textContainer}>
                        <h2 className={classes.cardtitle}>{props.data.title}</h2>
                        <p className={classes.carddescription}>{props.data.short_description}</p>
                    </div>
                    <div className={classes.platformInfo}>
                            {props.data.platform.includes("Windows") && <box-icon type='logo' name='windows' color="rgba(255,255,255,0.7)"/>}
                            {props.data.platform.includes("Web Browser") && <box-icon type='solid' name='window-alt' color="rgba(255,255,255,0.7)"/>}
                            <p>{props.data.genre}</p>
                    </div>
                </div>
            )
}

export default Card;