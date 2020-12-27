const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/icon.iconlomo')
.then(() =>{
    console.log('connected to mongo DB successfully!!');
})
.catch((error) => {
    console.log('unable to connect to the console');
    console.error(error);
});


app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-with, Content, Accept, Conten-Type, Authorization');
    res.setHeader('Access-Control-Allow-Method','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'musty123',
            officer_name: 'abdul',
            oficcer_rank: 'inspector',
            officer_division:'kpakungu',
            officer_email:'iconmusty@gmail.com',
            officer_image: "20616669",
        },
        {
            
            _id: 'musty123',
            officer_name: 'icon',
            oficcer_rank: 'copra',
            officer_division:'kpakungu',
            officer_email:'iconmusty@gmail.com',
            officer_image: "20616669",
            
        },
        {
            _id: 'musty123',
            officer_name: 'abba',
            oficcer_rank: 'commisioner',
            officer_division:'headquater dutsen kura',
            officer_email:'iconmusty@gmail.com',
            officer_image: "20616669",
        },
    
    ]

});

app.use((req,res) => {
    console.log('request recieved');
    next();
});
app.use((req, res) => {
    res.json({message:'your request was successful'});
});


module.exports = app;