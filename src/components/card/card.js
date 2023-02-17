import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"
//https://skeletonreact.com/
const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },2000) // refresh vaxti
    }, []) 
    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="blue" highlightColor="black"> 
            {/* // refresh eliyende deyisen rengler */}
                <Skeleton variant="circular" height={400} width={400} duration={1.5} />
            </SkeletonTheme>
        </div>

        :
        <Link to={`/movie/${movie.id}`} style={{color:"white"}}>
            <div className="cards">
            {/* https://image.tmdb.org/t/p/original/a4I481szRmycyreQTLrRe4f4YJe.jpg */}
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie ? movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie ? movie.release_date:""}
                        <span className="card__rating"> IMDB {movie ? movie.vote_average:""}</span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,80) + "....." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards