import React, { useState } from 'react'
import './Home.css'
import { NavBar } from '../components/NavBar'
import { SearchBar } from '../components/Searchbar'
import { CardList } from '../components/CardList'
import logo from '../resources/HSwordlogo.png'

export const Home = () => {
        const [searchTerm, setSearchTerm] = useState('')
        const [cards, setCards] = useState([])
        const [loading, setLoading] = useState(false)
        const [hasSearched, setHasSearched] = useState(false)
        const [wild, setWild] = useState('')
        let accessToken;

        const getToken = async() => {
            try {
                const response = await fetch(`https://eu.battle.net/oauth/token?client_id=a569196e691a46268cc45bfdf10f17a6&client_secret=IyXkzOP4X7WQGUmpiltYV3oc2DduokWK&grant_type=client_credentials`)
                const data = await response.json()
                accessToken = data.access_token
            } catch (error) {
                window.location = '/*'
                console.log(error)
            } 
        }
    
        const getCards = async() => {
            setHasSearched(false)
            setLoading(true)
            try {
                await getToken()
                const response = await fetch(`https://eu.api.blizzard.com/hearthstone/cards/?collectible=1${wild}&textFilter=${searchTerm}&locale=en-US$access_token=${accessToken}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }})
            const data = await response.json()
            const {cards} = data
            console.log(data)
            if (cards){
                const newCards = cards.map((card) => {
                  const {artistName, cropImage, id, image, imageGold, flavorText, attack, health, manaCost, classId, name, rarityId} = card
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
                        artist: artistName,
                        text: flavorText,
                        rarity: rarityId
                    }  
                })
                setCards(newCards)
                setLoading(false)
                setHasSearched(true)
            }
            } catch (error) {
                console.log(error)
                setLoading(false)
            } 
        }

    return (
        <div className = 'home-body fixed'>
            <NavBar />
            <div className = 'main-body'>
                <img src = {logo} alt = 'HSlogo' className = 'main-logo' />
                <div className = 'area'>
                    <div className = 'bubble'>
                        <p className = 'intro-text'> Welcome to the Hearthstone Deckbuilder, powered by Blizzards own game data. Use the searchbar to search any card in hearthstone, either by 'Standard Sets' or wild cards.  Click on the cards for more
                             information and to add to your deck or click on a class button to filter cards by their class. Head to deckbuider to view your deck, make changes and see your collection! 
                        </p>
                    </div>
                </div>
                <SearchBar  getCards = {getCards}
                            setWild = {setWild}
                            setSearchTerm = {setSearchTerm}
                            setHasSearched = {setHasSearched}
                             />
                <CardList   cards = {cards}
                            loading = {loading}
                            hasSearched = {hasSearched}
                            searchTerm = {searchTerm}
                            setCards = {setCards} /> 
            </div>
        </div>  
    )
 }

