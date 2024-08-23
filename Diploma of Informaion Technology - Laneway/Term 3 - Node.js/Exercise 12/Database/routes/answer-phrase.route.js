const express = require('express');
const router = express.Router();
const {
  createAnswerPhrase,
  getAnswerPhrases,
  getAnswerPhraseById,
  updateAnswerPhraseById,
  deleteAnswerPhrase
} = require('../controllers/answer-phrase.controller.js');

router.post('/createAnswerPhrase', createAnswerPhrase);
router.get('/', getAnswerPhrases);
router.get('/:id', getAnswerPhraseById);
router.patch('/:id', updateAnswerPhraseById);
router.put('/:id', updateAnswerPhraseById);
router.delete('/:id', deleteAnswerPhrase);

module.exports = router;