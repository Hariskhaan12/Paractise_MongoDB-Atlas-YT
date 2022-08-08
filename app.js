// const express = require('express')
// const app = express();
// const mongoose = require('mongoose');
// const Item=require('./Model/Item')
// const path = require('path')



// const connectionString =
//   "mongodb+srv://ParactiseUser:pakistan1234@cluster0.t079u.mongodb.net/ECommerce?retryWrites=true&w=majority";


// mongoose.connect(connectionString).then((result) => {
//     app.listen(7000, () => {
//         console.log(" DB Connected & Server is Running on Port 7000");
//     })
// })
//     .catch((err) => {
//     console.log(err);
//     })

// app.use(express.urlencoded({extended:false}))
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('./FrontEnd/index.html'))
// })


//                                          //  POST USING FORM DATA


// // app.post("/AddItem", (req,res) => {
// //     // console.log(req.body)
// //     // creating a document
// //     const item = new Item(req.body);
// //     item.save().then((result) => {
// //         // res.status(200).send("<h1>Item Added</h1> ")
// //         res.redirect('/')
// //     })
// //         .catch((err) => {
// //             console.log(err);
// //     })
// // })

//                             // POST USING API / JAVASCRIPT


// app.post("/AddItem", (req,res) => {
//     const {data}=req.body
//     console.log(data)
//     // creating a document
//     const item = new Item(data);
//     item.save().then((result) => {
//         // res.status(200).send("<h1>Item Added</h1> ")
//         console.log("DATA ADDED")
//         res.redirect('/')
//     })
//         .catch((err) => {
//             console.log(err);
//     })
// })

// app.get("/getAllItem", (req,res) => {
//     Item.find().then((result) => {
//         res.json({result})
//     })
//         .catch((err) => {
//             console.log(err);
//     })
// })

// // app.delete()

// app.all("*", (req, res) => {
//     res.status(404).send("404. Page Not Found :)");
// })