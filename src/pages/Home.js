import React, { useState } from 'react'
import './Home.css'
import { NavBar } from '../components/NavBar'
import { SearchBar } from '../components/Searchbar'
import { CardList } from '../components/CardList'
import logo from '../resources/HSwordlogo.png'
import { Loading } from '../components/Loading'


export const Home = () => {
        const [searchTerm, setSearchTerm] = useState('')
        const [cards, setCards] = useState([])
        const [loading, setLoading] = useState(false)
        let accessToken;
    
        const getToken = async() => {
            const response = await fetch(`https://eu.battle.net/oauth/token?client_id=a569196e691a46268cc45bfdf10f17a6&client_secret=IyXkzOP4X7WQGUmpiltYV3oc2DduokWK&grant_type=client_credentials`)
            const data = await response.json()
            accessToken = data.access_token
        }
    
        const getCards = async() => {
            await getToken()
            const response = await fetch(`https://eu.api.blizzard.com/hearthstone/cards/?collectible=1&textFilter=${searchTerm}&locale=en-US$access_token=${accessToken}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }})
            const data = await response.json()
            const {cards} = data
            if (cards){
                const newCards = cards.map((card) => {
                  const {artistName, cropImage, id, image, imageGold, attack, health, manaCost, classId, name} = card
                    return {
                        id: id,
                        name: name,
                        attack: attack,
                        health: health,
                        mana: manaCost,
                        image: image,
                        goldImage: imageGold,
                        cutImage: cropImage,
                        class: classId,
                        artist: artistName
                    }  
                })
                setCards(newCards)
            }
        }
    
    return (
        <div className = 'home-body fixed'>
            <NavBar />
            <div className = 'main-body'>
                <img src = {logo} alt = 'HSlogo' className = 'main-logo' />
                <SearchBar getCards = {getCards} setSearchTerm = {setSearchTerm} />
                <CardList  cards = {cards} /> 
                <Loading />
            </div>
        </div>  
    )
 }

