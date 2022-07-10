import classes from "./Header.module.css"

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.bugericon}>
                <span className={classes.burger}/>
                <span className={classes.burger}/>
                <span className={classes.burger}/>
            </div>
            <h3 className={classes.logo}>F2P!</h3>
        </div>
    )
}

export default Header;