import React, {useState} from 'react'
import classes from "./Searchbar.module.css"

export default function Searchbar(props) {


  const searchbarHandler = (e) => {
    props.getQuery(e.target.value)
  }

  return (
    <div className={classes.searchbarContainer}>
        <input className={classes.searchbar} type="text" placeholder='Search for games...'
            onChange={searchbarHandler}/>
    </div>
  )
}
