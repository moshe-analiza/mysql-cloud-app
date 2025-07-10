import {
    getAllRiddles,
    getRiddleById,
    addRiddle,
    updateRiddle,
    deleteRiddle
} from '../DAL/riddleDAL.js';

export const getRiddles = async (req, res) => {
    try {
        const riddles = await getAllRiddles();
        res.json(riddles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

export const getRiddle = async (req, res) => {
    try {
        const riddle = await getRiddleById(req.params.id);
        if (!riddle) return res.status(404).json({ error: 'Riddle not found' });
        res.json(riddle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

export const createRiddle = async (req, res) => {
    try {
        const { title, question, correctAnswer } = req.body;
        if (!title || !question || !correctAnswer)
            return res.status(400).json({ error: 'Missing fields' });

        const id = await addRiddle(title, question, correctAnswer);
        res.status(201).json({ id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

export const updateRiddleById = async (req, res) => {
    try {
        const { title, question, correctAnswer } = req.body;
        const resUpdate = await updateRiddle(req.params.id, title, question, correctAnswer);
        res.json({ success: resUpdate.affectedRows > 0 });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

export const deleteRiddleById = async (req, res) => {
    try {
        const resDelete = await deleteRiddle(req.params.id);
        res.json({ success: resDelete.affectedRows > 0 });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};
