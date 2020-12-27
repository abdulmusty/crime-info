const mongoose = require('mongoose');

const dbSchema = mangoose.Schema({
    officer_name: {type: String, required:true},
    officer_email: {type: String, required:true},
    officer_id: {type: String, required:true},
    officer_rank: {type: String, required:true},
    officer_division: {type: String, required:true},
})


module.exports = mongoose.models('db','dbShema');