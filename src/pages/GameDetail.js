import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./GameDetail.module.css"
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import { BallTriangle } from "react-loader-spinner";
import 'boxicons'

const GameDetail = () => {
    let params = useParams();
    const [readMore, setReadMore] = useState(true);
    const [gameDetail, setGameDetail] = useState([]);
    const [slideImages, setSlideImages] = useState([]);
    const navigate = useNavigate();

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
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                else if(response.status === 404){
                    console.log("ERRRORALERT")
                    navigate("/NoMatch", {replace: true});
                    return Promise.reject('error 404')
                }
                else{
                    return Promise.reject('some other error: ' + response.status)
                }     
            })
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
            <div className={classes.container}>
                <div className={classes.gameInfo}>
                    <ul className={classes.breadcrumbs}>
                        <li><a href="/games">Catalog</a></li>
                        <li>/</li>
                        <li>{gameDetail.title}</li>
                    </ul>
                    <img className={classes.promoImage} src={gameDetail.thumbnail} alt={"Thumbnail of " + gameDetail.title}></img>
                    <h1>{gameDetail.title}</h1>
                    <div className={classes.devInfo}>
                        <p><span>Developer: </span> {gameDetail.developer}</p>
                        <p><span>Publisher: </span> {gameDetail.publisher}</p>
                        <p><span>Released Date: </span> {gameDetail.release_date}</p>
                        <p><span>Genre: </span> {gameDetail.genre}</p>
                    </div>
                    <p className={classes.shortDescription}>{gameDetail.short_description}</p>
                    <div className={classes.platformInfo}>
                        <h4 className={classes.platformText}>Platform</h4>
                        {gameDetail.platform === "Windows" && <box-icon type='logo' name='windows' color="rgba(255,255,255,0.7)"/>}
                        {gameDetail.platform === "Web Browser" && <box-icon type='solid' name='window-alt' color="rgba(255,255,255,0.7)"/>}
                    </div>
                </div>
    
                <div className={classes.mainContent}>
                    <div className="slide-container">
                        {slideImages.length !== 0 &&      
                            <Fade>
                                    {slideImages.map((fadeImage, index) => (
                                    <div className="each-fade" key={index}>
                                        <div className="image-container">
                                            <img src={fadeImage.url} alt={"Screenshot of " + gameDetail.title}/>
                                        </div>
                                    </div>
                                    ))}                     
                            </Fade>
                        }
                        {slideImages.length === 0 &&  
                                <div className="each-fade" key="No_Screenshot">
                                    {console.log("/")}    
                                    <div className="image-container">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/No_Screenshot.svg/1280px-No_Screenshot.svg.png"} alt={"No screenshot"}/>
                                    </div>
                                </div>
                            }
                    </div>        
                    <div className={classes.descriptionContainer}>
                        <h2>Description</h2>
                        <hr/>
                        <p className={readMore ? classes.description : classes.descriptionShow}>{gameDetail.description}</p>
                        <p className={classes.readMore} onClick={handleReadMore}>{readMore ? "Read more" : "Show less"}</p>
                    </div>
                    <div className={classes.requirementContainer}>
                        <h3>System Requirements</h3>
                        {gameDetail.minimum_system_requirements &&                     
                        <div>
                            <p><span>OS: </span> {gameDetail.minimum_system_requirements.os}</p>
                            <p><span>Processor: </span> {gameDetail.minimum_system_requirements.processor}</p>
                            <p><span>Memory: </span> {gameDetail.minimum_system_requirements.memory}</p>
                            <p><span>Graphic: </span> {gameDetail.minimum_system_requirements.graphics}</p>
                            <p><span>Storage: </span> {gameDetail.minimum_system_requirements.storage}</p> 
                        </div>
                        }
                        {!gameDetail.minimum_system_requirements && 
                            <p>Data unavailable</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={classes.spinnerContainer}>
                <BallTriangle color="#00BFFF" height={80} width={80} />
            </div>
        )
    }

}

export default GameDetail;