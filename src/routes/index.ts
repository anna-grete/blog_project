import express from 'express';
import fs from 'fs';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import deleteUser from './users/deleteUser';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import createPost from './posts/createPost';
const router = express.Router();
var userRoutes : string [] = [];

// fs.readdirSync(__dirname + '/users').forEach(function(file){

// userRoutes.push (file.substring(0,file.indexOf('.')));
// });

// // console.log(userRoutes.toString());

router.use('/users', [createUser, getUser, getUsers, deleteUser]);
router.use('/posts', [getPost, getPosts, createPost]);

export default router;