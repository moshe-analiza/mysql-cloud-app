import {
    getAllRiddles,
    getRiddleById,
    addRiddle,
    updateRiddle,
    deleteRiddle
} from '../DAL/riddleDAL.js';

export const getRiddles = async (req, res) => {
    const riddles = await getAllRiddles();
    res.json(riddles);
};

export const getRiddle = async (req, res) => {
    const riddle = await getRiddleById(req.params.id);
    if (!riddle) return res.status(404).json({ error: 'Riddle not found' });
    res.json(riddle);
};

export const createRiddle = async (req, res) => {
    const { title, question, correctAnswer } = req.body;
    if (!title || !question || !correctAnswer)
        return res.status(400).json({ error: 'Missing fields' });

    const id = await addRiddle(title, question, correctAnswer);
    res.status(201).json({ id });
};

export const updateRiddleById = async (req, res) => {
    const { title, question, correctAnswer } = req.body;
    const resUpdate = await updateRiddle(req.params.id, title, question, correctAnswer);
    res.json({ success: resUpdate.affectedRows > 0 });
};

export const deleteRiddleById = async (req, res) => {
    const resDelete = await deleteRiddle(req.params.id);
    res.json({ success: resDelete.affectedRows > 0 });
};
