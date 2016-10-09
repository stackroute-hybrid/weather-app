var React=require('react');
var WeatherList=require('./WeatherList.js');
var SearchForm=require('./SearchForm.js');
var $=require('jquery');
var Weather=React.createClass(
      {
        getInitialState: function() {
              return {jsonData:[], weatherObj:{}};
 },

    getWeatherOfCity:function(arg){
      console.log(arg);
      $.ajax({

        url: "http://api.openweathermap.org/data/2.5/forecast?q="+arg.City+"&units=metric&APPID=f26e13300695b52c685811eb18a876d5",
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          this.setState({jsonData:data.list});
          this.setState({weatherObj:data});

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
        },

        componentDidMount: function(){
          this.getWeatherOfCity({'City':'Bangalore'});
        },
         render:function(){

                return(<div>
                           <div>
                            <SearchForm onSubmitCity={this.getWeatherOfCity}></SearchForm>
                            </div>
                            <br/>
                            <div>
                            <WeatherList weatherObj ={this.state.weatherObj} data={this.state.jsonData}></WeatherList>
                            </div>
                     </div>)
          }
      })

module.exports=Weather;
