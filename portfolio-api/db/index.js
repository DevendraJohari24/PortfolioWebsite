
const config = require('../config');
const mongoose = require('mongoose');

require('./models/portfolio');
require('./models/blog');

exports.connect = () => {
  return mongoose.connect("mongodb+srv://devendra:devendra@cluster0.wetu8tj.mongodb.net/portfolioDb?retryWrites=true&w=majority").then(()=>{
    console.log("Connected");
  }).catch(err => {
    console.log(err);
  })
}
