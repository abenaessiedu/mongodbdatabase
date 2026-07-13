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
    const book = new Book({
    name: req.body.name
    
    })
    try {
    const newBook = await books.save()
    res.status(201).json(newBook)
    } catch (err) {
        res.status(400)
    }
})
//Updating one
router.patch('/:id', getBook, (req, res) => {
if (req.body.name != null) {
    res.book.name = res.body.name 
}
if (req.body.name != null) {
    res.book.name = res.body.name 
}
})


//Deleting one 
router.delete('/:id', getBook, async (req, res) => {
try {
await res.subscriber.remove()
res.json({message:"Deleted Book!"})
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