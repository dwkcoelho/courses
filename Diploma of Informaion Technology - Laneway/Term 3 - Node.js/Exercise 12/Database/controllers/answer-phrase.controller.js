const AnswerPhrase = require("../models/answer-phrase.model.js");
//Create
const createAnswerPhrase = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
      const createAnswerPhrase = await AnswerPhrase.create(req.body);
      res.status(201).json({ createAnswerPhrase });
    } catch (error) {
      console.error("Error Creating AnswerPhrase:", error.message);
      res.status(500).json({ message: error.message });
    }
  };
//Read
const getAnswerPhrases = async (req, res) => {
    try {
        const getAnswerPhrases = await AnswerPhrase.find();
        res.status(200).json({ getAnswerPhrases });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Read with id
const getAnswerPhraseById = async (req, res) => {
    try {
        const { id } = req.params;
        const getAnswerPhraseById = await AnswerPhrase.findById(id);
        res.status(200).json({ getAnswerPhraseById });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Update
const updateAnswerPhraseById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateAnswerPhraseById = await AnswerPhrase.findByIdAndUpdate(id, req.body);
        if (!updateAnswerPhraseById) {
            res.status(404).json({ message: "Phrase not found" });
        } else {
            const updatePlatter = await AnswerPhrase.findById(id);
            res.status(200).json(updatePlatter);
        }

    } catch (error) {
        res.status(500).json({ message: "Phrase not updated" });
    }
};
//Delete
const deleteAnswerPhrase = async (req, res) => {
    try {
        const { id } = req.params;
        await AnswerPhrase.findByIdAndDelete(id);
        res.status(200).json({ message: "Phrase deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Phrase not deleted" });
    }
};


module.exports = { createAnswerPhrase, getAnswerPhrases, getAnswerPhraseById, updateAnswerPhraseById, deleteAnswerPhrase };