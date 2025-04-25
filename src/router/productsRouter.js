const express = require('express');
const productsRouter = express.Router();
const productsDatabase = require("../data/productsDatabase.json")

productsRouter.route("/").get((req, res) => {
    res.render("products", { //products.ejs
        productsDatabase,
    }
    );
});

productsRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("productDetail",{ //productDetail.ejs
        productDatabase: productsDatabase[id],  //product → ตัวแปรที่ส่งให้หน้าเว็บ (productDetail.ejs) เพื่อใช้แสดงข้อมูล   //products[id] → ดึงข้อมูลสินค้าตาม id จากไฟล์ products.json
    })
});

module.exports = productsRouter;