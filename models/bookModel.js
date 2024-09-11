const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:"String",
    thumbnail:"String",
    description:"String",
    author:{
        type:mongoose.ObjectId,
        ref:"Author",
    }
  });
const Book = mongoose.model('Book', bookSchema);
module.exports=Book