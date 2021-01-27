import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import './Error.css'

export const Error = () => {
    return (
        <div>
            <NavBar />
            <div className = 'error'>
                <h1> Something went wrong or the page couldnt be found, please go back to the home page</h1>
                <Link to = '/' className = 'button-search'>Go Home</Link>
            </div>
        </div>
        
        
    )
}

