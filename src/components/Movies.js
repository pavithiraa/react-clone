import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {selectMovies} from "../features/movie/movieSlice"
import {useSelector} from "react-redux"
function Movies() {
    const movies=useSelector(selectMovies)
    return (
        <Container>
         <h4>Recommended For You</h4>
         <Content>
             {movies && 
             movies.map((movie)=>(
                <Wrap key={movie.id}>
                    <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg}/>
                    </Link>   
               </Wrap> 
             ))
             }
             
         </Content>
        </Container>
    )
}

export default Movies
const Container=styled.div`


`
const Content=styled.div`
    display:flex;
    padding:30px 0 26px;
    flex-wrap:nowrap;
    justify-content: space-around;
    column-gap:26px;
`
const Wrap=styled.div`
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    border:3px solid rgba(249,249,249,10%);
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%)0px 16px 10px -10px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.05);
        box-shadow:rgb(0 0 0/80%) 0px 40px 58px -16px,
        rgb(0 0 0 /73%)0px 30px 22px -10px;
        border:3px solid rgba(249,249,249,80%);
    }

`