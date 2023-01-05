"use strict";

const express = require("express");
const {items} = require("./fakeDb");

const router = express.Router();

/** GET /items -- return list of all current items. */
router.get("/", function(req, res) {
    res.json({ items });
});

/** POST /items -- add item to list; return new item. */
router.post("/", function(req, res) {
    
});

/** GET /items/:name -- return specific items. */
router.get("/:name", function(req, res) {
    
});

/** PATCH /items/:name -- modify specific items; return modified item. */
router.patch("/:name", function(req, res) {
    
});

/** DELETE /items/:name -- delete item. */
router.delete("/:name", function(req, res) {
    
});