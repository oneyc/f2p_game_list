import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./GameDetail.module.css"
import { Slide, Fade } from 'react-slideshow-image';
import gameDetail from "../data/dummy_game_detail"; 
import "react-slideshow-image/dist/styles.css";

const GameDetail = () => {
    let params = useParams();
    const [readMore, setReadMore] = useState(true);
    const [gameDetail, setGameDetail] = useState([]);
    const [slideImages, setSlideImages] = useState([]);

    // const slideImages = [
    //     {
    //       url: gameDetail.screenshots[0].image,
    //       caption: 'Slide 1'
    //     },
    //     {
    //       url: gameDetail.screenshots[1].image,
    //       caption: 'Slide 2'
    //     },
    //     {
    //       url: gameDetail.screenshots[2].image,
    //       caption: 'Slide 3'
    //     },
    //   ];
    
    const handleReadMore = () => {
        setReadMore(!readMore);
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b60695f14amshbe33f9fd6323808p190367jsnf9ebb1e8c832',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        window.scrollTo(0, 0);
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.gameId}`, options)
            .then(response => response.json())
            .then(response => {
                setGameDetail(response)
                let tempArr = [];
                for (let i = 0; i < response.screenshots.length; i++) {
                    tempArr.push({url: response.screenshots[i].image})
                }
                setSlideImages(tempArr)
            })
            .catch(err => console.error(err));
    },[])

    if(gameDetail.length !== 0){
        return(
            <div>
                <img className={classes.promoImage} src={gameDetail.thumbnail}></img>
                <div className={classes.gameInfo}>
                    <h2>{gameDetail.title}</h2>
                    <div className={classes.devInfo}>
                        <p >Developer: {gameDetail.developer}</p>
                        <p>Publisher: {gameDetail.publisher}</p>
                        <p>Released: {gameDetail.release_date}</p>
                    </div>
                    <p className={classes.shortDescription}>{gameDetail.short_description}</p>
                </div>
    
                <div className="slide-container">
                    {slideImages.length !== 0 &&      
                        <Fade>
                                {slideImages.map((fadeImage, index) => (
                                <div className="each-fade" key={index}>
                                    {console.log(fadeImage)}                                   
                                    <div className="image-container">
                                        <img src={fadeImage.url} />
                                    </div>
                                </div>
                                ))}                     
                        </Fade>
                    }
                    {slideImages.length === 0 &&  
                            <div className="each-fade" key="No_Screenshot">
                                 {console.log("/")}    
                                <div className="image-container">
                                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/No_Screenshot.svg/1280px-No_Screenshot.svg.png"}/>
                                </div>
                            </div>
                        }
                </div>
                {/* {slideImages.length === 0 &&
                <h3>Screenshots unavailable</h3>} */}
    
                <div className={classes.descriptionContainer}>
                    <h3>Description</h3>
                    <p className={readMore ? classes.description : classes.descriptionShow}>{gameDetail.description}</p>
                    <p className={classes.readMore} onClick={handleReadMore}>{readMore ? "Read more" : "Show less"}</p>
                </div>
                <div className={classes.requirementContainer}>
                    <h3>System Requirements</h3>
                    {gameDetail.minimum_system_requirements &&                     
                    <div>
                        <p>OS: {gameDetail.minimum_system_requirements.os}</p>
                        <p>Processor: {gameDetail.minimum_system_requirements.processor}</p>
                        <p>Memory: {gameDetail.minimum_system_requirements.memory}</p>
                        <p>Graphic: {gameDetail.minimum_system_requirements.graphics}</p>
                        <p>Storage: {gameDetail.minimum_system_requirements.storage}</p> 
                    </div>
                    }
                    {!gameDetail.minimum_system_requirements && 
                        <p>Data unavailable</p>
                    }
                </div>
            </div>
        )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }

}

export default GameDetail;