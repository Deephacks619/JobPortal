const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const pool = require('./db')
//const crypto = require('crypto');
//const Cryptr = require('cryptr');
//const cryptr = new Cryptr('myTotalySecretKey');

app.use(bodyParser.json())
app.use(cors())


//add the user into database
app.post('/register',async (req,res)=>{
    try {
       // const mystr = cryptr.encrypt(req.body.password)
        const newuser=await pool.query("INSERT INTO register(username,email,password) values($1,$2,$3) RETURNING * ",
        [req.body.name,req.body.email,req.body.password]);
        res.json(newuser.rows)
    } catch (error) {
        res.send(error);
    }
})

app.get('/signin',async (req,res)=>{
    try{
        const login = await pool.query("SELECT * FROM register WHERE email=$1",[req.body.email])
        const pass = login.rows[0].password
        //const decrypted = cryptr.decrypt(pass)
        if (pass===req.body.password){
            res.json("success")
        }
    }
    catch(error){
        res.send("error")
    }
})


app.listen(1000,()=>{
    console.log("running server on 1000")
})