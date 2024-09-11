const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
   name:String,
   Born:String,
   Website:String,
   Genre:String,
   about:String,
  });
const Person= mongoose.model('Person', personSchema);
module.exports=Person