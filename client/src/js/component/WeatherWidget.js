var React=require('react');
var $=require('jquery');
var WeatherWidget=React.createClass(
      {

        handleSaveButtonClick:function(){
          var jsonData= {
              city: this.props.weatherObj.city.name,
              country:this.props.weatherObj.city.country,
              icon: this.props.icon,
              description: this.props.description,
              humidity:this.props.humid,
              temp:this.props.temp,
              max:this.props.max,
              min:this.props.min,
              date:this.props.date,
              speed:this.props.wind.speed,
              all:this.props.cloud.all,
              hpa:this.props.hpa,
              lon:this.props.weatherObj.city.coord.lon,
              lat:this.props.weatherObj.city.coord.lat
              };
          $.ajax({
                      url: 'http://localhost:8080/weather/save',
                      type: 'POST',
                      data:jsonData,
                      cache: false,
                      success: function(d) {
                          alert("Weather data saved.");

                      }.bind(this),
                        error: function(xhr, status, err) {
                      console.error(this.props.url, status, err.toString());
                      }.bind(this)
                  });

                  },
         render:function(){
          if(Object.getOwnPropertyNames(this.props.weatherObj).length === 0){
              return(null);
          }
                  return(
                     <div>
                        <table className="table">
                          <tbody>
                         <tr>
                             <td>
                             </td>
                             <td>
                              <h3>{this.props.weatherObj.city.name}, {this.props.weatherObj.city.country}, <img width="35" height="25" src={'http://www.geonames.org/flags/x/'+this.props.weatherObj.city.country.toLowerCase()+'.gif'} /></h3>
                              <img src={"http://openweathermap.org/img/w/"+this.props.icon+".png"} /> <h2>{this.props.temp}°С, </h2><h2>{this.props.description} </h2>
                            <p id="date">
                            <b>{this.props.date}</b>
                            </p>

                               <p id="humidity"><b>Humidity: {this.props.humid}</b></p>

                       <p><strong>{this.props.temp}°С </strong></p>
                       <p>max: {this.props.max} min: {this.props.min}°С</p>
                       <br/>
                       <p>wind {this.props.wind.speed} m/s. clouds {this.props.cloud.all}%, {this.props.hpa} hpa</p>
                       [Geo coords] <a className="text-color, body-orange" href={"https://openweathermap.org/Maps?zoom=12&amp;lat="+this.props.weatherObj.city.coord.lon+"&amp;lon="+this.props.weatherObj.city.coord.lat+"&amp;layers=B0FTTFF"}>[{this.props.weatherObj.city.coord.lon+" , "+ this.props.weatherObj.city.coord.lat}]</a>
                       </td>
                       </tr>
                         <tr>
                            <td></td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.handleSaveButtonClick}>Save</button></td>
                         </tr>
                       </tbody>
                       </table>
                     </div>)
          }
      })

module.exports=WeatherWidget;
