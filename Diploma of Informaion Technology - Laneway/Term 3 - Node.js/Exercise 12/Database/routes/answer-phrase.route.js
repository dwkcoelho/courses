const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();
const {
  createAnswerPhrase,
  getAnswerPhrases,
  getAnswerPhraseById,
  updateAnswerPhraseById,
  deleteAnswerPhrase
} = require('../controllers/answer-phrase.controller.js');

router.post('/createAnswerPhrase', authMiddleware(['admin']), createAnswerPhrase);
router.get('/', getAnswerPhrases);
router.get('/:id', authMiddleware(), getAnswerPhraseById);
router.patch('/:id', authMiddleware(['admin']), updateAnswerPhraseById);
router.put('/:id', authMiddleware(['admin']), updateAnswerPhraseById);
router.delete('/:id', authMiddleware(['admin']), deleteAnswerPhrase);

module.exports = router;