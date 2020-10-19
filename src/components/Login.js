import React, { Component } from 'react';
import './Signin.css'

class Signin extends Component {
    render() {
        return (
            <div>
             <div className="myForm">
            <div className="formInstructionsDiv formElement">
            <h2 className="formTitle" >Sign In</h2>
            <p className="instructionsText">Log Into Your Account</p>
            </div>
            <div className="middle">
            <label>
                <input className="inputRequest formContentElement" type="text" placeholder="Email" required/>
            </label>
            <label>
                <input className="inputRequest formContentElement" type="password" placeholder="Enter password" required/>
            </label>
        
            </div>
            <div className="submitButtonDiv formElement">
            
            <button className="submitButton">Sign Up</button>
            </div>
        </div>
            </div>
            
        );
    }
}

export default Signin;