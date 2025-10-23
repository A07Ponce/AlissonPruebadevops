const request = require('supertest');
const app = require('../app');

describe('Pruebas de la app de Alisson', () => {
  test('Debe responder con el mensaje correcto', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola desde la app de Alisson!');
  });

  test('Debe responder con código 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
