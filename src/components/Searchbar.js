import './SearchBar.css'
import React, { useRef, useEffect } from 'react'

export const SearchBar = (props) => {
    const searchBox = useRef('')
   
    useEffect(()=> {
        searchBox.current.focus()
    }, [])

    const handleClickWild = (e) => {
        e.preventDefault()
        props.setWild('')
        props.setHasSearched(true)
    }

    const handleClickStandard = (e) => {
        e.preventDefault()
        props.setWild('&set=standard')
        props.setHasSearched(true)
    }

    const handleChange = (e) => {
        props.setSearchTerm(e.target.value)
        props.setWild('')
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
                <input type = 'submit' className = 'button-search' onClick = {handleClickStandard} value = 'Standard Set' />
            </div>
        </form>
    )
}