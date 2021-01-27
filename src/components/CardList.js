import React from 'react'
import './CardList.css'
import { Loading } from './Loading'
import { CardModal } from '../components/CardModal'


export const CardList = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        return (
            <CardModal cards = {props.cards} />
        )
    }

    if (props.loading){
        return (
                <Loading />
        )}

    if (props.cards.length < 1){
        return <h1 className = {props.hasSearched ? 'sorry' : 'not-active'} > Sorry no cards matched your search... </h1>
    }

    if (!props.searchTerm){
        return <h1 className = 'sorry' > Please enter a search term </h1>
    }
  
    return (
        <div className = 'card-list'>
            <CardModal cards = {props.cards} />
           {props.cards.map((card) => {
               return (
                        <img src = {card.image} alt = {card.name} className = 'list-image' key = {card.id} onClick = {handleClick} />
               )
           })}
        </div>
    )
}