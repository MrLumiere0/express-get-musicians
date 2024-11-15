// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { Musician } = require('./models/index')
const {seedMusician} = require("./seedData");

jest.mock('../' , () => ({create: jest.fn()}))


describe('./musicians endpoint', () => {
    // Write your tests here
    
    test("Returns Musician", async () => {
        const response = await request(router).get("/musicians/2")
        expect(response.body.id).toBe(2)
    })

    test("Can create a new Musician", async () => {

        // Create a user object with the musician insrance fields 

        // Create a mock musician
        const muscMock = { ...muscData, _id: "mockedId"}
        const response = await request(router).get("/musicians/:name/:intstrument")
        expect(response.status).toBe(200)
    })
    
    test("Can update a Musician", async () => {
        const response = await request(router).put("/musicians/:id")
        expect(response.status).toBe(200)
    })

    test("Can Delete a Musician", async () => {
        const response = await request(router).put("/musicians/:id")
        expect(response.status).toBe(200)
    })




    
})
