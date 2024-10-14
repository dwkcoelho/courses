const booksModel = require("../models/books-model");

module.exports = {
    // GET /api/books
    index: (req, res) => {
        const books = booksModel.getAllBooks();
        res.json(books);
    },
    // GET /api/books/:id
    show: (req, res) => {
        const { id } = req.params;
        const book = booksModel.getBookById(id);
        if (!book) return res.status(404).json({ message: "Book not found!" });
        res.json(book);
    },
    // POST /api/books
    save: (req, res) => {
        const { title, author, quantityAvailable } = req.body;

        if (typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvailable !== 'string') {
            res.status(400).json({ message: "Invalid Data!" });
        }

        const newBook = booksModel.createBook(title, author, quantityAvailable);
        res.status(201).json(newBook);
    },
    // PUT /api/books
    update: (req, res) => {
        const { id } = req.params;
        const { title, author, quantityAvailable } = req.body;
        const fieldsToUpdate = {};

        if(title) fieldsToUpdate.title = title;
        if(author) fieldsToUpdate.author = author;
        if(quantityAvailable) fieldsToUpdate.quantityAvailable = quantityAvailable;

        const updatedBook = booksModel.updateBook(id, fieldsToUpdate);
        res.json(updatedBook);
    },
    // DELETE /api/books/:id
    delete: (req, res) => {
        const { id } = req.params;
        const deletedBook = booksModel.deleteBook(id);
        res.json(deletedBook);
    }
}