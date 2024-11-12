// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    
    test("Returns Musician", async () => {
        const response = await request(app).get("/musicians/2")
        expect(response.body.id).toBe(2)
    })

    test("Can create a new Musician", async () => {
        const response = await request(app).get("/musicians/:name/:intstrument")
        expect(response.status).toBe(200)
    })
    
    test("Can update a Musician", async () => {
        const response = await request(app).put("/musicians/:ID")
        expect(response.status).toBe(200)
    })

    test("Can Delete a Musician", async () => {
        const response = await request(app).put("/musicians/:ID")
        expect(response.status).toBe(200)
    })




    
})
