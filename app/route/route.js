import express from 'express';
import {getUsers} from '../controllers/controller.js';

const router = express.Router();


router.get('/me', getUsers);

export default router;