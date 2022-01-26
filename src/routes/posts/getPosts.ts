import express, { Request, Response } from 'express';
import { LimitOnUpdateNotSupportedError } from 'typeorm';
import Post from '../../entities/Post';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try{
        const { userId, skip, take } = req.query;

        // const posts = await Post.find({
        //     take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
        //     skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0,
        //     order: {
        //         createdAt: 'DESC'
        //     }
        // });
        // console.log(...posts)

        const postsQuery = Post.createQueryBuilder('post')
        // .select('author.name as authorName ')
        .innerJoin('post.author', 'author')
        .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
        .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

        if(userId != undefined){
            postsQuery.where('author.id = :userId', { userId: userId });
        }
        const posts = await postsQuery.getMany();

        // Array myArray = [...posts];
        // console.log(postsForUser[0].author);

        return res.json({posts: posts});
    }catch(error){
        return res.json({
            error: "Unable to find posts", 
            message: "unknown error"});

    }
});

export default router;