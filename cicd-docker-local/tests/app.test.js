const request = require('supertest');
const app = require('../src/index');

describe('App basic routes', () => {
  test('GET / should respond with 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  test('GET /health should return {status: ok}', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
  test('GET /version should return version', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBeDefined();
  });
});
