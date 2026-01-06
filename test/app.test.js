const request = require('supertest');
const {app,server} = require('../app')
  
   // Using a popular library like Jest or Mocha with an assertion library like Chai
   describe('GET /', () => {

    // Description
    it("should return 200 status and the correct message",async() => {
       const response = await request(app).get("/");
       expect(response.status).toBe(200);
       expect(response.text).toBe("Welcome to APPLES Youtube Channel @cranky479 Please Subscribe By, --> T Karthick");
    });
});

afterAll(() => {
server.close();
});