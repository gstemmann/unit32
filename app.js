const express = require('express');
const app = express();

app.use(express.json());

// add the functions from helper_function file
const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helper_function')

app.get('/', function(req, res) {
    return res.send('the slash home page');
});



app.get('/mean', function(req, res) {

    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mean",
        result: findMean(nums)
      }
    
      return res.send(result);
});



app.get('/median', function(req, res) {
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: findMedian(nums)
  }

  return res.send(result);
});



app.get('/mode', function(req, res) {
let numsAsStrings = req.query.nums.split(',')
let nums = convertAndValidateNumsArray(numsAsStrings);
  let result = {
    operation: "mode",
    result: findMode(nums)
  }

    return res.send(result);
});

//mandatory
app.listen(3000, function(){
    console.log('App on port 3000');
  }) 
  