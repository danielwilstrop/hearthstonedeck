import React, { Fragment, useState } from 'react' 
import { NavBar } from '../components/NavBar'
import './contact.css'

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <NavBar /> 
            <form className = 'contact-form' onSubmit = {handleSubmit}>
                <div className = 'header-wrapper'>
                    <div className = 'header-wrapper-bubble'>
                        <h1 className = 'form-header'> Please enter your details and one of the team will be in touch as soon as possible </h1>
                    </div>
                </div>
                    <label for = 'name'>Name:</label>
                        <input type = 'text' minLength = '3' placeholder = 'enter your name' id = 'name' />
                    <label for = 'email'>Email:</label>
                        <input type = 'email' placeholder = 'Enter e-mail address' id = 'email' />
                    <label for = 'confirm-email'>Confirm Email:</label>
                        <input type = 'email' placeholder = 'Enter e-mail address' id = 'confirm-email' />
    
                <div className = 'select-input'>
                    <label for = 'select'>What is the purpose of your enquiry?</label>
                        <select id = 'select'>
                            <option value = 'report-bug'> Report an Issue with the website</option>
                            <option value = 'commercial'> Commercial</option>
                            <option value = 'advertising'> Advertising</option>
                            <option value = 'other'> Any Other Query</option>
                        </select>
                </div>
                <div className = 'checkbox-input-section'>
                    <div className = 'header-wrapper checkbox-input'>
                        <div className = 'header-wrapper-bubble'>
                            <p className = 'form-header'>Do you wish to be notified when new features are added to our site? We may also contcat you from time to time with Hearthstone news and events.  If you do not wish to receive these emails please check this box</p>
                            <input type = 'checkbox' id = 'newsletter' />
                         </div>
                    </div>   
                </div>
                        <label for = 'text-area'> What is your Enquiry? </label>
                        <textarea rows = '15' cols = '50' />
                        <input type = 'submit' value = 'Submit' className = 'form-button' />
            </form> 
        </Fragment>       
    )
}

