import request from "supertest";
import {app} from "../../app";

it("returns 201 status on signup success",async() =>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "user@example.com",
            password: "password"
        })
        .expect(201);
});
it("returns 400 status on invalid email",async() =>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "argfadfgexample.com",
            password: "password"
        })
        .expect(400);
});