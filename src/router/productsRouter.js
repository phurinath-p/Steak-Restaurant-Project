const express = require('express');
const productsRouter = express.Router();
const productsDatabase = require("../data/productsDatabase.json")

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        productsDatabase,
    }
    );
});

productsRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("productDetail",{ 
        productDatabase: productsDatabase[id], 
    })
});

module.exports = productsRouter;