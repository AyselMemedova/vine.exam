const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const vineSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  count: Number,
  totalPrice: Number,
});

const vine = mongoose.model("vine", vineSchema);

app.get("/api/vine", async (req, res) => {
  const resp = await vine.find();
  res.send(resp);
});

app.post("/api/vine", async (req, res) => {
  // const { title, price, image, description, count, totalPrice } = req.body;
  // const newVine = new vine({
  //   title: title,
  //   price: price,
  //   image: image,
  //   description: description,
  //   count: count,
  //   totalPrice: totalPrice,
  // });
  const newVine=new vine(req.body)
  await newVine.save();
  res.send("item elave olundu");
});

app.put("/api/vine/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await vine.findByIdAndUpdate(id, { ...req.body });
  res.send("updated");
});

app.delete("/api/vine/:_id", async (req, res) => {
  const { _id } = req.params;
  const resp = await vine.findByIdAndDelete(_id);
  res.send("delete");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(" api running");
});
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((resp) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log("db not connected");
  });
