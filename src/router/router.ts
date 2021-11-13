import { Router } from 'express';

import VoteController from '../controllers/vote-controller';

const router = Router();

router.get('/votes', VoteController.getAll);

export default router;
