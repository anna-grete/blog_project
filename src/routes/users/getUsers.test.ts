import axios from 'axios';

const endpoint = 'http://localhost:3000/users';

describe ('users',() => {
    beforeAll(() => {
//käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
    });
    //käivita testid
    it ('Should return user by ID', async () => {
        const response = await axios.get(
            endpoint + '/089ddda5-f4c8-4bca-974a-e69d616e504a'
        );
        expect(response?.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Title for a random post');
    });
    it('should return error for non existing ID', async ()=> {
       const response = await axios.get(endpoint + '/089ddda5-f4c8-4bca-974a-e69d616e504a');
       const data = response.data;
       console.log(data);
       expect(data).toHaveProperty('id');
       expect(data?.message).toEqual('no user found with given ID');
       return;
    });
    afterAll(() => {
//käivitatakse peale testi pakki (nt. kustuta test andmebaas)
    });
});