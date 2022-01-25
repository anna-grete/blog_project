import axios from 'axios';

const endpoint = 'http://localhost:3000';

describe ('users',() => {
    beforeAll(() => {
//käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
    });
    //käivita testid
    it('should return error for non existing ID',() => {
       const response = await axios.get(endpoint + '/nonExistentID');
       const data = response.data;
       expect(data).toHaveProperty('error');
       expect(data.error).toEqual('No user found with given ID');
       return;
    });
    afterAll(() => {
//käivitatakse peale testi pakki (nt. kustuta test andmebaas)
    });
});