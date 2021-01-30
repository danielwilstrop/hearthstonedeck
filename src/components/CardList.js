import React from 'react'
import './CardList.css'
import { Loading } from './Loading'
import { Image } from './Image'


export const CardList = (props) => {
    if (props.loading){
        return (
            <Loading />
        )}

    if (props.cards.length < 1){
        return <h1 className = {props.hasSearched ? 'sorry' : 'not-active'} > Sorry no cards matched your search... </h1>
    }

    if (!props.searchTerm){
        props.setCards([])
        return <h1 className = 'sorry' > Please enter a search term </h1>
    }

    if (props.searchTerm){
    return (
        <div className = 'card-list'>
           {props.cards.map((card) => {
               return (
                   <Image card = {card} key = {card.id} />  
               )
           })}
        </div>
    )
    }
}