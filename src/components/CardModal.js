import React from 'react'
import './CardModal.css'

export const CardModal = (props) => {
    return (
        <div className = 'modal' onClick = {props.onClose}>
        <div className = 'modal-content' onClick = {e => e.stopPropagation()}>
            <div className = 'modal-header'>
                <h1>  </h1>
                
            </div>
            <div className = 'modal-images'>
                
            
            </div>
            <div className = 'modal-body'>
                <h1> {props.card.name} </h1>
            </div>
            <div className = 'modal-footer'>
                <button onClick = {props.onClose} >Close</button>
            </div>
        </div>
     </div>
           
    )
    }