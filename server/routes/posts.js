import express from 'express';

import { getPost, getPosts, getPostsBySearch, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js';

const router = express.Router();

// http://localhost:5000/posts
router.get('/:id', getPost);
router.get('/', getPosts);
router.get('/v1/search', getPostsBySearch);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;