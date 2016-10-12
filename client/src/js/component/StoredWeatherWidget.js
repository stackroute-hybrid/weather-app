var React=require('react');
var $=require('jquery');
var StoredWeatherWidget=React.createClass(
      {

        handleDeleteButtonClick:function(){
          var deleteHandler = this.props.deleteCallback;
          $.ajax({
                      url: '/weather/delete/'+this.props.storedWeatherData._id,
                      type: 'DELETE',
                      cache: false,
                      success: function(d) {
                        console.log("Weather deleted"+d);
                      }.bind(this),
                        error: function(xhr, status, err) {
                      console.error(this.props.url, status, err.toString());
                      }.bind(this)
                  });
                        deleteHandler(this.props.storedWeatherData._id);
                  },
         render:function(){
                  return(
                     <div>
                        <table className="table">
                          <tbody>
                           <tr>
                           <td>
                           </td>
                           <td>
                            <h3>{this.props.storedWeatherData.city}, {this.props.storedWeatherData.country}, <img width="35" height="25" src={'http://www.geonames.org/flags/x/'+this.props.storedWeatherData.country.toLowerCase()+'.gif'} /></h3>
                            <img src={"http://openweathermap.org/img/w/"+this.props.storedWeatherData.icon+".png"} /> <h2>{this.props.storedWeatherData.temp}°С ,</h2><h2> {this.props.storedWeatherData.description}</h2>
                          <p id="date">
                          <b>{this.props.storedWeatherData.date}</b>
                          </p>

                             <p id="humidity"><b>Humidity: {this.props.storedWeatherData.humidity}</b></p>

                     <p><strong>{this.props.storedWeatherData.temp}°С , {this.props.storedWeatherData.description}</strong></p>
                     <p>max: {this.props.storedWeatherData.max} min: {this.props.storedWeatherData.min}°С</p>
                     <br/>
                     <p>wind {this.props.storedWeatherData.speed} m/s. clouds {this.props.storedWeatherData.all}%, {this.props.storedWeatherData.hpa} hpa</p>
                     [Geo coords] <a className="text-color, body-orange" href={"https://openweathermap.org/Maps?zoom=12&amp;lat="+this.props.storedWeatherData.lon+"&amp;lon="+this.props.storedWeatherData.lat+"&amp;layers=B0FTTFF"}>[{this.props.storedWeatherData.lon+" , "+ this.props.storedWeatherData.lat}]</a>
                     </td>
                       </tr>
                         <tr>
                            <td></td>
                            <td><button className="btn btn-warning btn-sm" onClick={this.handleDeleteButtonClick}>Delete</button></td>
                         </tr>
                       </tbody>
                       </table>
                     </div>)
          }
      })

module.exports=StoredWeatherWidget;
