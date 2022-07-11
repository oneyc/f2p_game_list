import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import classes from "./GamesList.module.css"
import ReactPaginate from "react-paginate";
import { BallTriangle } from "react-loader-spinner";

const GamesList = (props) => {

    const [games, setGames] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const navigate = useNavigate();

    const gamesPerPage = 16;
    let currentGameIndex = pageNumber * gamesPerPage;
    
    const handleSelectedGame = (event) => {
        navigate("../games/" + event.currentTarget.id, {replace: true})
    }

    const displayGames = (() => 
        games
            .slice(currentGameIndex, currentGameIndex + gamesPerPage)
            .map(game => {
                return(
                    <Card id={game.id} data={game} onClick={handleSelectedGame}></Card>
                )
            })
    );

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b60695f14amshbe33f9fd6323808p190367jsnf9ebb1e8c832',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try{
            fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            .then(response => {
                if(response.status === 200){
                    console.log('200 OK')
                    return response.json();
                }
                else if(response.status === 404){
                    console.log("ERRRORALERT")
                    return Promise.reject('error 404')
                }
                else{
                    return Promise.reject('some other error: ' + response.status)
                }               
            })
            .then(response => {
                console.log(response)
                setGames(response)
            })
            .catch(error => console.log('error is', error));
        }
        catch(err){
            console.error(err);
        }

    }, [])

    const changePage = ({selected}) => {
        window.scrollTo(0, 0);
        setPageNumber(selected);
    }

    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    }

    if(games.length !== 0){
        return(
            <section className={classes.mainSection}>
                {/* <h1>{games.length} games found</h1> */}
                <ReactPaginate 
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={Math.ceil(games.length/gamesPerPage)}
                        onPageChange={changePage}
                        containerClassName={classes.paginationButtons}
                        previousLinkClassName={classes.previousButton}
                        nextLinkClassName={classes.nextButton}
                        disabledClassName={classes.disabledButton}
                        activeClassName={classes.activeButton}
                    />
                <div className={classes.gamesList}>
                {displayGames()}
                <h3 className={classes.backToTop} onClick={handleBackToTop}>Back to top</h3>
                </div>      
            </section>
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

export default GamesList;