import './SearchBar.css'
import React, { useRef, useEffect, useState } from 'react'

export const SearchBar = (props) => {
    const searchBox = useRef('')
   
    useEffect(()=> {
        searchBox.current.focus()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        props.getCards()
    }

    const handleChange = (e) => {
        props.setSearchTerm(e.target.value)
    }

    return (
        <form>
            <input className = 'input-search'
            type = 'text'
            placeholder = 'Search for Cards by Name...'
            ref = {searchBox} 
            onChange = {handleChange} />
            <input type = 'submit' className = 'button-search' onClick = {handleClick} value = 'Search' />
        </form>
    )
}