import React, { useState } from 'react'
import { CardModal } from './CardModal'

export const Image = (props) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        setShowModal(true)
        document.body.style.position = 'fixed'
    }

    const closeModal = () => {
        setShowModal(false)
        document.body.style.position = ''
    }

    if (showModal) {
        return (
                <CardModal card = {props.card} onClose = {closeModal} /> 
        )
    }

    return (
        <img src = {props.card.image} 
             alt = {props.card.name} 
             key = {props.card.id} 
             className = 'list-image' 
             onClick = {handleClick} />
    )
}
