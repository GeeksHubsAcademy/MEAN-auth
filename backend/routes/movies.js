import express from 'express';
import MovieController from '../controllers/MovieController.js'
const router = express.Router();

router.get('/', MovieController.getAll);
router.post('/', MovieController.insert);
router.put('/:id', MovieController.update);
router.delete('/:id', MovieController.delete);

export default router;