import React from 'react'
import { Link } from 'react-router-dom'

export const CardModal = (props) => {
    return (
        <div>
            <h1> Foo-Bar </h1>
            <img src = {props.cards[1].image} alt = 'image' />
        </div>
    )
    }