import React, { Component } from 'react';
import './Register.css'


const initialState ={
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
    nameerror:"",
    emailerror:"",
    passworderror:"",
    confirmpassworderror:""
}

class Register extends Component {

    state=initialState

    namehandlechange = (e)=>{
        e.preventDefault()
        this.setState({
            name:e.target.value
        })
    }
    emailhandlechange = (e)=>{
        e.preventDefault()
        this.setState({
            email:e.target.value
        })
    }
    passwordhandlechange = (e)=>{
        e.preventDefault()
        this.setState({
            password:e.target.value
        })
    }
    confirmhandlechange = (e)=>{
        e.preventDefault()
        this.setState({
            confirmpassword:e.target.value
        })
    }
    isvalid=()=>{
        let nameerror="";
        let emailerror=""
        let passworderror=""
        let confirmpassworderror=""
        if(!this.state.name){
            nameerror="name shouldnot be empty"
        }
        if(!this.state.email.includes("@")){
            emailerror="invalid email"
        }
        
        if(this.state.password.length<5){
            passworderror="enter password more than 5 characters"
            if(!this.state.password){
                passworderror="enter password"
            }
        }
        if(this.state.password!==this.state.confirmpassword){
            confirmpassworderror="entered password doesnot match"
        }
        if(nameerror || emailerror || passworderror || confirmpassworderror){
            this.setState({nameerror,emailerror,passworderror,confirmpassworderror})
            return false;
        }
        return true;
    }

    handlesubmit =async (e)=>{
        e.preventDefault()
        try { 
            const isvalid = this.isvalid();
        if (isvalid){
            const response = await fetch('http://localhost:1000/register',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(this.state)
            });
            console.log(response)
            console.log(this.state)
            this.setState(initialState)
        }
        } catch (error) {
            console.log(error.message)
        }
    }
render() {
return (
<div>
     <div className="wrapper">
        <form className="myForm" onSubmit={this.handlesubmit}>
            <div className="formInstructionsDiv formElement">
            <h2 className="formTitle" >Register</h2>

            <p className="instructionsText">Please fill in this form to create an account</p>
            </div>
            <div className="fillContentDiv formElement">
                <div className="formContentElement">  
                    <input className="inputRequest"
                    name="name"
                    value={this.state.name}
                    onChange={this.namehandlechange}
                     type="text" placeholder="Name" required/>
                </div>
                <div style={{color:"red",fontSize:14,marginLeft:5}}>{this.state.nameerror}</div>
                
                <label>
                    <input className="inputRequest formContentElement"
                    name="email"
                    value={this.state.email}
                    onChange={this.emailhandlechange}
                    type="text" placeholder="Email" required=""/>
                </label>
                <div style={{color:"red",fontSize:14,marginLeft:5}}>{this.state.emailerror}</div>

                <label>
                    <input className="inputRequest formContentElement"
                    name="password"
                    value={this.state.password}
                    onChange={this.passwordhandlechange}
                    type="password" placeholder="Enter password" required/>
                </label> 
                <div style={{color:"red",fontSize:14,marginLeft:5}}>{this.state.passworderror}</div>

                <label>
                    <input className="inputRequest formContentElement" 
                    name="confirmpassword"
                    value={this.state.confirmpassword}
                    onChange={this.confirmhandlechange}
                    type="password" placeholder="Confirm password" required/>
                </label>
                <div style={{color:"red",fontSize:14,marginLeft:5}}>{this.state.confirmpassworderror}</div>

            </div>
            <div className="submitButtonDiv formElement">
                <button className="submitButton" type="submit"
                >Sign Up</button>
            </div>
        </form>
    </div>
    </div>
        );
    }
}

export default Register;