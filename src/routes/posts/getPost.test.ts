import axios from 'axios';
import { createPostfix } from 'typescript';

const endpoint = 'http://localhost:3000/posts/';



describe('get post by ID', () => {
        beforeAll(() => {
    //käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
        });
        //käivita testid
    it('should return post by ID', async() => {
    //    const post = createPost();
        const response = await axios.get(
            endpoint + '/30907668-68b8-4f24-ba83-b550f16bf50d'
        );
        expect(response?.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Title for a random post');
    });
    it('Should return error for non existing ID', async () => {
        const response = await axios.get(endpoint + '/30907668-68b8-4f24-ba83-b550f16bf50d');
        const data = response.data;
        console.log(data);
        expect(data).toHaveProperty('message');
        expect(data?.message).toEqual('no post found with given ID');
        return;
    });

    afterAll(() => {
        //käivitatakse peale testi pakki (nt. kustuta test andmebaas)
            });
});