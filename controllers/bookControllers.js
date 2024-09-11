const Book = require("../models/bookModel")

const getAllBooks=async(req, res) => {
 const books= await Book.find({}).populate('author');
 res.json(books)
  }
const getBookById=async(req, res) => {
  const book=await Book.findById(req.params.bookId).populate('author').exec();
  res.json(book)
  }
const addBook=async(req, res) => {
    const data= req.body
    const book=new Book(data)
    await book.save()
    res.json(book)
  }
const updateBook=async(req, res) => {
 const updatedBook=await Book.findByIdAndUpdate(req.params.bookId,req.body, {new:true})
 res.json(updatedBook)
  }
const deleteBook=async(req, res) => {
  const deletedBook=await Book.findByIdAndDelete(req.params.bookId)
  res.send("deleted")
  }
module.exports={getAllBooks,getBookById,addBook,updateBook,deleteBook}          