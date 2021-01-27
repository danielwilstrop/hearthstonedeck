import './SearchBar.css'
import React, { useRef, useEffect } from 'react'

export const SearchBar = (props) => {
    const searchBox = useRef('')
   
    useEffect(()=> {
        searchBox.current.focus()
    }, [])

    const handleClickWild = (e) => {
        e.preventDefault()
        props.getCardsWild()
    }

    const handleClickStandard = (e) => {
        e.preventDefault()
        props.getCardsStandard()
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
            <div className = 'search-buttons'>
                <input type = 'submit' className = 'button-search' onClick = {handleClickWild} value = 'Wild Cards' />
                <input type = 'submit' className = 'button-search' onClick = {handleClickStandard} value = 'Standard Cards' />
            </div>
        </form>
    )
}