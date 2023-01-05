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
    items.push(req.body);

    res.json({ added: req.body })
});

/** GET /items/:name -- return specific items. */
router.get("/:name", function(req, res) {
    const item = items.find(i => i.name === req.params.name);

    res.json(item);
});

/** PATCH /items/:name -- modify specific items; return modified item. */
router.patch("/:name", function(req, res) {
    const item = items.find(i => i.name === req.params.name);
    
    for (let key in req.body) {
        item[key] = req.body[key];
    }
    
    res.json({ updated: item })
});

/** DELETE /items/:name -- delete item. */
router.delete("/:name", function(req, res) {
    const itemIndex = items.findIndex(i => i.name === req.params.name);
    
    items.splice(itemIndex, 1);

    res.json({ message: "Deleted" })
});


module.exports=router;