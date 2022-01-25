import axios from 'axios';

const endpoint = 'http://localhost:3000/users';

describe ('users',() => {
    beforeAll(() => {
//käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
    });
    //käivita testid
    it('should return error for non existing ID', async ()=> {
       const response = await axios.get(endpoint + '/nonExistentID');
       const data = response.data;
       console.log(data);
       expect(data).toHaveProperty('message');
       expect(data.message).toEqual('no user found with given ID');
       return;
    });
    afterAll(() => {
//käivitatakse peale testi pakki (nt. kustuta test andmebaas)
    });
});