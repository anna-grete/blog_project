import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

//Find post by ID

router.get('/:id', async (req: Request, res: Response) => {
    try {
    const { id } = req.params;

    const post = await Post.findOne({id: id});

    if(!post) {
        return res.json({ message: 'no psot found with given ID'});
    }

        return res.json(post);
    }catch(error){
        return res.json({
            error: "Unable to create new user", 
            message: "unknown error"});
    }
});

export default router; 