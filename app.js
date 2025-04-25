const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app'); //set DEBUG=* & node app.js
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter");


// เสิร์ฟไฟล์ static จากโฟลเดอร์ 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

// เสิร์ฟไฟล์ static จากโฟลเดอร์ 'css'
app.use('/css', express.static(path.join(__dirname, 'src', 'css')));


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/"))) // link ไป index.HTML

app.set("views","./src/views");
app.set("view engine","ejs")

app.use("/products",productsRouter)

app.get("/",(req,res)=>{
res.render('index',{username : 'Phurinath',customers:["Kitti","Kittikorn","Kitty"]}); // link ไป index.ejs
})





app.listen(PORT,()=>{
    debug("Listening on port"+ " : "+chalk.green(PORT));
})

