const Person = require("../models/personModel");

const getAllPerson=async(req, res) => {
    const persons= await Person.find({});
    res.json(persons)
     }
const getPersonById=async(req, res) => {
    const person=await Person.findById(req.params.personId).exec();
    res.json(person)
    }
const addPerson=async(req, res) => {
    const data= req.body
    const person=new Person(data)
    await person.save()
    res.json(person)
  }
const updatePerson=async(req, res) => {
    const updatedPerson=await Person.findByIdAndUpdate(req.params.personId,req.body, {new:true})
    res.json(updatedPerson)
     }
const deletePerson=async(req, res) => {
    const deletedPerson=await Person.findByIdAndDelete(req.params.personId)
    res.send("deleted")
    }

module.exports={
    getAllPerson,getPersonById,addPerson,updatePerson,deletePerson
}