var React = require('react');
var StoredWeatherWidget = require('./StoredWeatherWidget');

var StoredWeatherList = React.createClass({
  render : function()
  {
    var passedDeleteHandler=this.props.deleteHandler;
    var allStoredWeatherWidgets = this.props.data.map(function(weathers){
      console.log('weathers'+JSON.stringify(weathers));
      return(
       <StoredWeatherWidget deleteCallback={passedDeleteHandler} storedWeatherData={weathers} key={weathers._id}></StoredWeatherWidget>
      );
    }.bind(this));
    return(
        <div>
          {allStoredWeatherWidgets}
        </div>

    );
  }
});
module.exports = StoredWeatherList;
