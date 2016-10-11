var React = require('react');
var StoredWeatherList = require('./StoredWeatherList');
var $=require('jquery');
var StoredWeather = React.createClass({
  getInitialState:function(){
    return {data:[]}
  },

  changeStateAfterDelete:function(id){
    this.state.data.forEach(function(element, index, object){
      if(element["_id"]==id){
        console.log("match found");
        object.splice(index,1);
      }
    })
this.setState({data:this.state.data});

  },
  deleteWeather:function(deleteUrl){
    $.ajax({
      url:deleteUrl,
      method:'DELETE',
      dataType: 'json',
      cache: false,
      success: function(data1) {
        this.setState({data: data1});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount:function(){
    $.ajax({
      url: 'http://localhost:8080/weather/getStoredWeather',
      method:'GET',
      dataType: 'json',
      cache: false,
      success: function(weatherData) {
        this.setState({data: weatherData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  render:function(){
    return (
      <div>
         <StoredWeatherList data={this.state.data} deleteHandler={this.changeStateAfterDelete} />
      </div>
    )
  }
});
module.exports=StoredWeather;
