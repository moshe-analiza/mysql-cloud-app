import express from 'express';
import {
  getRiddles,
  getRiddle,
  createRiddle,
  updateRiddleById,
  deleteRiddleById
} from '../controllers/riddleController.js';

const router = express.Router();

router.get('/getAllRiddles', getRiddles);
router.get('/:id', getRiddle);
router.post('/createRiddle', createRiddle);
router.put('/updateRiddle/:id', updateRiddleById);
router.delete('/deleteRiddle/:id', deleteRiddleById);

export default router;
