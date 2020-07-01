import express from 'express';
import MovieController from '../controllers/MovieController.js';
import { auth } from '../middleware/auth.js'
const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/page/:page', MovieController.getByPage);
router.post('/', auth, MovieController.insert);
router.put('/:id', auth, MovieController.update);
router.delete('/:id', auth, MovieController.delete);

export default router;