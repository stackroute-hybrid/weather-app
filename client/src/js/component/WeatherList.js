var React=require('react');
var WeatherWidget=require('./WeatherWidget.js');
var WeatherList=React.createClass(
  {
          render:function(){

            var weatherDataByDate = this.props.data;
            var weatherDataArray = [];
             for(var i=0; i<weatherDataByDate.length; i++){
                 if(weatherDataByDate[i]["dt_txt"].indexOf("09:00:00") !== -1 ){
                   if(weatherDataArray.length<4)     {
                     weatherDataArray.push(weatherDataByDate[i]);
                   }
                 }
             }
           var localWeatherObj=this.props.weatherObj;
           var weatherNodes = weatherDataArray.map(function(element) {
           return (
                  <td>
                      <WeatherWidget weatherObj={localWeatherObj} icon={element.weather[0].icon} description={element.weather[0].description} date={element.dt_txt} humid={element.main.humidity} min={element.main.temp_min} max={element.main.temp_max} temp={element.main.temp} weather={this.weather} cloud={element.clouds} rain={element.rain} wind={element.wind} sea={element.main.sea_level} hpa={element.main.grnd_level}>
                      </WeatherWidget>
                  </td>
              );
            });

                 return(
                 <div className="WeatherList">
                 {weatherNodes}
                  </div>)
       }
})

module.exports=WeatherList;
