const request = require('supertest');
const {app,server,name} = require('../app')
  
   // Using a popular library like Jest or Mocha with an assertion library like Chai
   describe('GET /', () => {

    // Description
    it("should return 200 status and the correct message",async() => {
       const response = await request(app).get("/");
       expect(response.status).toBe(200);
       expect(response.text).toBe(`Welcome to GITHUB to KKTN961 Please follow and support page by, ${name}`);
    });
});

afterAll(() => {
server.close();
});