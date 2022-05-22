const express = require('express');

const app = express();

app.use(express.json());


app.get('/', function(req, res) {
    return res.send('the slash home page');
});

app.get('/mean', function(req, res) {


    return res.send(mean(req));
});

function mean(nums) {
    debugger;
    let meanOfNums = nums.length / 2
    console.log(meanOfNums);
}
mean([1,2,3,4,5])

app.get('/median', function(req, res) {
    return res.send('blue');
});

app.get('/mode', function(req, res) {
    return res.send('a new thing');
});

//mandatory
app.listen(3000, function(){
    console.log('App on port 3000');
  }) 
  