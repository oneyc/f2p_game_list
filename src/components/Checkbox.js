import { useState } from "react";
import classes from "./Checkbox.module.css"

const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return(
        <label className={classes.container}>
            <input
            type="checkbox"
            onChange={() => {
                setIsChecked(!isChecked);
            }}
            />
            <span
            className={classes[`checkbox ${isChecked ? "checkbox--active" : ""}`]}
            // This element is purely decorative so
            // we hide it for screen readers
            aria-hidden="true"
            />
            <h4>{props.children}</h4>
      </label>
    )
}

export default Checkbox;