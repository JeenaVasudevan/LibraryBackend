const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    author:"String",
  });
const Author = mongoose.model('Author', authorSchema);
module.exports=Author