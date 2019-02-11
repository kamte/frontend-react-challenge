const request = require('supertest');
const app = require('../app');
const api = request(app);
const BASE_URL = '/phones';

describe('Server', () => {
  test(`[GET ${BASE_URL}] Should list all phones with status 200`, async () => {
    const response = await api
      .get(BASE_URL)
      .expect(200);

    expect(response.body.phones).toHaveLength(3);
  });
  
  test(`[GET ${BASE_URL}/0] Should get the phone with id '0'`, async () => {
    const response = await api
      .get(`${BASE_URL}/0`)
      .expect(200);
  
    expect(response.body.phone.id).toBe(0);
  });
  
  test(`[GET ${BASE_URL}/invalidId] Should get a not found message with a status of 404`, async () => {
    const response = await api
      .get(`${BASE_URL}/invalidId`)
      .expect(404);
  
    expect(response.body.message).toBe('Phone record not found');
  });
});