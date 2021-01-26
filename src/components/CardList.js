import React from 'react'
import './CardList.css'
import { Loading } from './Loading'


export const CardList = (props) => {
    return (
        <div className = 'card-list'>
           {props.cards.map((card) => {
               return (
                        <img src = {card.image} alt = {card.name} className = 'list-image' />
               )
           })}
           <Loading />
        </div>
    )
}