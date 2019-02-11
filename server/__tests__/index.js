const request = require('supertest');
const app = require('../app');
const api = request(app);
const BASE_URL = '/phones';

describe('Server', () => {
  test(`[GET ${BASE_URL}] with a page size equal to the data size should list all phones with status 200`, async () => {
    const response = await api
      .get(`${BASE_URL}?page=1&itemsPerPage=20`)
      .expect(200);
    console.log(response.body.phones)
    expect(response.body.phones).toHaveLength(20);
  });
  
  test(`[GET ${BASE_URL}] with a page size of 10 gives us the first 10 elements`, async () => {
    const response = await api
      .get(`${BASE_URL}?page=1&itemsPerPage=10`)
      .expect(200);

    expect(response.body.phones).toHaveLength(10);
    expect(response.body.paginator.pages).toBe(2);
    expect(response.body.paginator.pageNumber).toBe("1");
  });

  test(`[GET ${BASE_URL}] with a page size of 10 and a page of 2 gives us the last 10 elements`, async () => {
    const response = await api
      .get(`${BASE_URL}?page=2&itemsPerPage=10`)
      .expect(200);
    console.log(response.body.phones)
    expect(response.body.phones).toHaveLength(10);
    expect(response.body.paginator.pages).toBe(2);
    expect(response.body.paginator.pageNumber).toBe("2");
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