import { Router } from 'express';
import notes from './notes/notes.route';

const router: Router = Router();

router.use('/notes', notes);

export default router;
