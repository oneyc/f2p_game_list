import classes from "./NoMatch.module.css"
import { useNavigate } from "react-router-dom";


const NoMatch = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("./games", {replace: true})
    }

    return (
        <div className={classes.contentContainer}>
            <h1 className={classes.title}>404 Page Not Found</h1>
            <h3 className={classes.returnButton} onClick={handleNavigate}>Return to Main Page</h3>
        </div>
    )
}

export default NoMatch;