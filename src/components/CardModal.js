import React from 'react'
import './CardModal.css'
import Attack from '../resources/Attack.png'
import Health from '../resources/health.png'
import Mana from '../resources/mana.png'

export const CardModal = (props) => {

    const deCodeString = (str) => {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
      }

    return (
        <div className = 'modal' onClick = {props.onClose}>
        <div className = 'modal-content' onClick = {e => e.stopPropagation()}>
            <div className = 'modal-images'>
                <img src = {props.card.image} alt = 'regular card' />
                <img src = {props.card.goldImage} alt = 'gold card' className = {props.card.goldImage ? 'gold-image' : 'hide'} />
            </div>
            <div className = 'modal-body'>
                <div className = 'modal-info'>
                    <p className = 'flavor-text'> <i> {deCodeString(props.card.text)} </i></p>
                    <p> Artist: {props.card.artist} </p>
                </div>
                <div className = 'stats' >
                    <p className = {props.card.attack ? '' : 'hide'} ><img src = {Attack} alt = 'attack logo' />{props.card.attack}</p>
                    <p className = {props.card.attack ? '' : 'hide'} > <img src = {Health} alt = 'health logo' />{props.card.health}</p>
                    <p><img src = {Mana} alt = 'mana logo' />{props.card.mana}</p>
                </div>
            </div>
            <div className = 'modal-footer'>
                <button onClick = {props.onClose} className = 'button-search' >Close</button>
            </div>
        </div>
     </div>      
         )
    }