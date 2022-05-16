import mongoose from "mongoose";

// const serviceSchema = mongoose.Schema;

const services = new mongoose.Schema({
  subheading: {
    type: String,
  },
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  para: {
    type: String,
  },
  btn: {
    type: String,
  },
});

const Service = mongoose.model("services", services);

export default Service;
