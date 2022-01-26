import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

router.get('/:id/posts');

export default router;
