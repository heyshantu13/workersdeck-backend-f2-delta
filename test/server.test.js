const app = require("../app");
const supertest = require("supertest");
const db = require("../models");
const User = db.users;

test('POST /api/v1/user/signup',async () => {
    const data = { fullname:"Test case", password:"12345678",mobile_no:"7074136587",email: "teeekstemail@gmail.com", password: "12345678" };

    await supertest(app).post("/api/v1/user/signup")
    .send(data)
    .expect(200)
      .then(async (response) => {
        expect(response.body.message).toBe("User was registered successfully!");  
    });

});

test("POST /api/v1/user/signin", async () => {
    const data = { email: "heyshantu13@gmail.com", password: "12345678" };
    await supertest(app).post("/api/v1/user/signin")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body.message).toBe("Login Succesfuly");  
      });
  });

  test("POST /api/v1/user/signin", async () => {
    const data = { email: "heyshantu13@gmail.com", password: "12345678" };
    await supertest(app).post("/api/v1/user/signin")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body.message).toBe("Login Succesfuly");  
      });
  });


