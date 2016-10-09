var React = require('react');
var SearchForm = React.createClass({
getInitialState: function()
{
  return {City:''};
},
handleCityState: function(e)
{
  this.setState({City:e.target.value});
},


submitCity: function(e)
{
  e.preventDefault();
  var City = this.state.City.trim();
  if(!City)
  {
    return;
  }
  this.props.onSubmitCity({City:City});
  this.setState({City:''});

}
,
render: function(){
return (
  <div className="SearchForm">
    <form onSubmit={this.submitCity}>
    <div className="row">
       <div className="col-3"></div>
       <div className="col-4">
      <input type="text" name="City" className="form-control" value={this.state.City} onChange={this.handleCityState} placeholder="Enter city here..."/>
      </div>
       <div className="col-2">
    <input type="submit" className="btn btn-success btn-block" value="Search"/>
    </div>
     <div className="col-3"></div>
    </div>
    </form>
  </div>
);
}

});

module.exports = SearchForm;
