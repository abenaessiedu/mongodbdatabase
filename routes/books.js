const express = require('express')
const router = express.Router()
const Books = require('../models/books')

//Getting all 
router.get('/', async (req, res) => {
    try {
    const books = await Book.find()
    res.json(books)
    } catch(err) {
    res.status(500).json({message: err.message})

    }
})
//Getting one 
router.get('/:id', getBook, (req, res) => {
res.json(res.book)
})
//Creating one
router.post('/', (req, res) => {
    const book = new bookTitle({
    bookTitle: req.body.bookTitle, 
    authorName: req.body.authorName
    })
    try {
    const newBook = await books.save()
    res.status(201).json(newBook)
    } catch (err) {
    res.status(400).json({message: err.message})
    }
})
//Updating one
router.patch('/:id', getBook, async (req, res) => {
if (req.body.bookTitle != null) {
    res.book.bookTitle = res.body.bookTitle 
}
if (req.body.authorName != null) {
    res.book.authorName = res.body.authorName 
} try {
const updatedBook = await res.book.save()
res.json(updatedBook)
} catch (err) {
    res.status(400).json({message: err.message})

}
}) 


//Deleting one 
router.delete('/:id', getBook, async (req, res) => {
try {
await res.book.remove()
res.json({message: "Deleted Book!"})
} catch(err) {
res.status(500).json({message: err.message})
}
})


async function getBook(req, res, next){
let book 
try {
    book = await Books.findById(req.params.id)
    if (book == null) {
        return res.status(404).json({message: "Cannot Find Requested Book "})
    }
} catch(err) {
return res.status(500).json({message: err.message})

}
res.book = book 
next()
}

module.exports = router 