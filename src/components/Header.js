import classes from "./Header.module.css"
import { useNavigate } from "react-router-dom"

const Header = (props) => {

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