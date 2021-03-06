require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', function(req, res){
  res.send("This is the Home Page");
  console.log("home page route accessed")
})

app.get('/git', function(req, res){
  axios.get(process.env.GITHUB_URL)
  .then(function (response) {
    res.send(response.data);
    console.log('Github data sent');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

app.get('/twitter', function(req, res){

  const twt_token = process.env.TWITTER_TOKEN;
  axios.get(process.env.TWITTER_URL, {headers: {
    'Authorization': `Bearer ${twt_token}`
  }})
  .then(function (response) {
    res.send(response.data);
    console.log('Twitter data sent');
  })
  .catch(function (error) {
    console.log(error);
  })
})

app.get('/youtube', function(req, res){

  const twt_token = process.env.TWITTER_TOKEN;
  axios.get(process.env.YOUTUBE_URL)
  .then(function (response) {
    res.send(response.data);
    console.log('YouTube data sent');
  })
  .catch(function (error) {
    console.log(error);
  })
})

app.listen(process.env.PORT, () => {
  console.log('server started at port '+process.env.PORT);
});

