"use strict";

const request = require("supertest");

const app = require("./app");
const { items } = require("./fakeDb");

beforeEach(function () {
    items.push({ name: "cheerios", price: 3.40 });
})

afterEach(function () {
    items.length = 0;
})

describe("GET /items", function () {
    it("Gets a list of all current items on the list.", async function () {
        const resp = await request(app).get("/items");

        expect(resp.body).toEqual({
            items: [{
                name: "cheerios",
                price: 3.40
            }]
        });
    })
});

describe("POST /items", function () {
    it("Posts a new item to the list.", async function () {
        const resp = await request(app)
            .post("/items")
            .send({
                name: "popsicle",
                price: 1.45
            });
        // make another request to the "db" to make sure it's actually in there
        expect(resp.body).toEqual({
            added: {
                name: "popsicle",
                price: 1.45
            }
        });
    })
});

describe("GET /items/:name", function () {
    it("Gets a specific item from the list.", async function () {
        const resp = await request(app).get("/items/cheerios");

        expect(resp.body).toEqual({
            name: "cheerios",
            price: 3.40
        });
    })
});

describe("PATCH /items/:name", function () {
    it("Patches new data to an existing item on the list.", async function () {
        const resp = await request(app)
            .patch("/items/cheerios")
            .send({
                name: "better cheerios"
            });

        expect(resp.body).toEqual({
            updated: {
                name: "better cheerios",
                price: 3.40
            }
        })
    })
});

describe("DELETE /items/:name", function () {
    it("Deletes the first item with the provided name.", async function () {
        const resp = await request(app).delete("/items/cheerios");

        expect(resp.body).toEqual({
            message: "Deleted"
        })
    })
});





