import { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./GameDetail.module.css"
import { Slide, Fade } from 'react-slideshow-image';
import DUMMY_GAME_DETAILS from "../data/dummy_game_detail"; 
import "react-slideshow-image/dist/styles.css";

const GameDetail = () => {
    let params = useParams();
    const [readMore, setReadMore] = useState(true);
    const slideImages = [
        {
          url: DUMMY_GAME_DETAILS.screenshots[0].image,
          caption: 'Slide 1'
        },
        {
          url: DUMMY_GAME_DETAILS.screenshots[1].image,
          caption: 'Slide 2'
        },
        {
          url: DUMMY_GAME_DETAILS.screenshots[2].image,
          caption: 'Slide 3'
        },
      ];
      
    const handleReadMore = () => {
        setReadMore(!readMore);

    }

    return(
        <div>
            <img className={classes.promoImage} src={DUMMY_GAME_DETAILS.thumbnail}></img>
            <div className={classes.gameInfo}>
                <h2>{DUMMY_GAME_DETAILS.title}</h2>
                <div className={classes.devInfo}>
                    <p >Developer: {DUMMY_GAME_DETAILS.developer}</p>
                    <p>Publisher: {DUMMY_GAME_DETAILS.publisher}</p>
                    <p>Released: {DUMMY_GAME_DETAILS.release_date}</p>
                </div>
                <p className={classes.shortDescription}>{DUMMY_GAME_DETAILS.short_description}</p>
            </div>


            <div className="slide-container">
                <Fade>
                    {slideImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} />
                        </div>
                    </div>
                    ))}
                </Fade>
            </div>


            <div className={classes.descriptionContainer}>
                <h3>Description</h3>
                <p className={readMore ? classes.description : classes.descriptionShow}>{DUMMY_GAME_DETAILS.description}</p>
                <p className={classes.readMore} onClick={handleReadMore}>{readMore ? "Read more" : "Show less"}</p>
            </div>
            <div className={classes.requirementContainer}>
                <h3>System Requirements</h3>
                <p>OS: {DUMMY_GAME_DETAILS.minimum_system_requirements.os}</p>
                <p>Processor: {DUMMY_GAME_DETAILS.minimum_system_requirements.processor}</p>
                <p>Memory: {DUMMY_GAME_DETAILS.minimum_system_requirements.memory}</p>
                <p>Graphic: {DUMMY_GAME_DETAILS.minimum_system_requirements.graphics}</p>
                <p>Storage: {DUMMY_GAME_DETAILS.minimum_system_requirements.storage}</p>

            </div>
        </div>
    )
/*
Carousel

    */
}

export default GameDetail;