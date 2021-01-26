import React from 'react'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import './About.css'

export const About = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div class = 'about-body'>
                <h1 className= 'about-header'> Lorem Ipsum </h1>
                <p class = 'about-text'>
                    Duis nisi nisi aliquip deserunt sint ad elit. Dolor laborum ex sit id proident non nulla dolore id id. Tempor esse amet incididunt do ad nostrud enim. Deserunt est magna minim cillum ad incididunt ea est. Tempor enim adipisicing adipisicing consectetur non sit labore elit nostrud officia. Ipsum proident ad in nulla eiusmod exercitation eu occaecat deserunt quis.
                    Sint dolor excepteur aliqua et Lorem ex mollit. Nulla in ipsum cupidatat ullamco labore ullamco amet ipsum velit. Pariatur laborum ut esse nulla nisi aliquip culpa. Nulla duis mollit id voluptate dolor veniam et cupidatat. In eiusmod in consectetur aute. Quis cupidatat ipsum exercitation aliquip minim quis adipisicing. Ad reprehenderit consectetur ipsum adipisicing reprehenderit et fugiat tempor Lorem sunt velit et incididunt.
                    </p>
                <Link to = '/' className = 'button-search'>Go Home</Link>
            </div>
        </React.Fragment>
       

  
    )
}


