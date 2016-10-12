var express = require('express');
var router = express.Router();
var weather = require('../models/weather');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* Save weather data to MongoDB */
router.post('/save', function(req, res) {
  console.log(req.body);
  var weatherObj=new weather();
  weatherObj.city=req.body.city;
  weatherObj.country=req.body.country;
  weatherObj.icon=req.body.icon;
  weatherObj.description=req.body.description;
  weatherObj.humidity=req.body.humidity;
  weatherObj.temp=req.body.temp;
  weatherObj.max=req.body.max;
  weatherObj.min=req.body.min;
  weatherObj.date=req.body.date;
  weatherObj.speed=req.body.speed;
  weatherObj.all=req.body.all;
  weatherObj.hpa=req.body.hpa;
  weatherObj.lat=req.body.lat;
  weatherObj.lon=req.body.lon;
  weatherObj.save(function(err){
    if(err){
        res.send(err);
    }
    else {
       res.send("Weather Saved Sucessfully");
    }
  });
});

/*Route handler for GET to retrieve and return all saved weathers*/
  router.get('/getStoredWeather', function(req, res) {
    weather.find(function(err, result){
    res.send(result);
  });
});

/*Route handler for DELETE to delete q saved weather by ID*/
  router.delete('/delete/:id', function(req, res) {
    weather.remove({_id: req.params.id}, function(err, result){
      res.json({message:'Weather successfully deleted', result});
  });
});


module.exports = router;
