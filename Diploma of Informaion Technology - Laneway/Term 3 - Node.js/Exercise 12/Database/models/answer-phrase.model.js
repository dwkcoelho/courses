const mongoose = require('mongoose');

const AnswerPhraseSchema = mongoose.Schema(
  {
    phrase: {
      type: String,
      required: [true, "Phrase is required."]
    },
    polite: {
      type: Boolean,
      required: [true, "Polite is required."]
    }
  },
  {
    timestamps: true
  }
);

const AnswerPhrase = mongoose.model('AnswerPhrase', AnswerPhraseSchema);
module.exports = AnswerPhrase;
