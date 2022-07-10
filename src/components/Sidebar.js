import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
    
    return (
        <div className={props.sidebarVisibility ? classes.sidebarShown:classes.sidebarHidden}>
            <div className={classes.section}>
                <h3>Platform</h3>
                    <h4>PC</h4>
                    <h4>Browser</h4>
                    {console.log(props.sidebarVisibility)}
            </div>
            <div className={classes.section}>
                <h3>Categories</h3>
                    <h4>Placeholder</h4>
                    <h4>Placeholder</h4>
            </div>
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