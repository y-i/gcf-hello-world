require('dotenv').config();
const Supertest = require('supertest');
const request = Supertest(process.env.BASE_URL);

console.log(process.env.BASE_URL);

describe('helloGET', () => {
  test('should print "GET request" if request method is GET', () => {
    return request
      .get(`/helloGET`)
      .send()
      .expect(200)
      .expect(res => {
        expect(res.text).toBe('GET request');
      });
  });
  test('should print "PUT request" if request method is PUT', () => {
    return request
      .put(`/helloGET`)
      .send('hoge')
      .expect(200)
      .expect(res => {
        expect(res.text).toBe('PUT request');
      });
  });
  test('should print "Something blew up!" if request method is not PUT nor GET', () => {
    return request
      .post(`/helloGET`)
      .send('hoge')
      .expect(500)
      .expect(res => {
        expect(res.text).toBe(JSON.stringify({ error: 'Something blew up! GET/PUT Only' }));
      });
  });
});
