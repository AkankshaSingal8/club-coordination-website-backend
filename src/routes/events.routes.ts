import express from 'express';
import * as eventController from '../controllers/events.controller';

const router = express.Router();

router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEventById);
router.delete('/:id', eventController.deleteEventById);

export default router;
