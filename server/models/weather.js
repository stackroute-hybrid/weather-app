var mongoose=require('mongoose');
var schema=mongoose.Schema;


var weather=new schema({
  city:String,
  country:String,
  icon: String,
  description: String,
  humidity:String,
  temp:String,
  max:String,
  min:String,
  date:String,
  speed:String,
  all:String,
  hpa:String,
  lat:String,
  lon:String,
});

module.exports=mongoose.model('weather',weather);
