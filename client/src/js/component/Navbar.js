var React=require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink.js');

var Navbar=React.createClass(
      {

         render:function(){

                return(
                  <div className="container-fluid">
              	<div className="row">
              		<div className="col-md-12">
              			<nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
              				<div>
              					<ul className="nav navbar-nav">
                        <li><NavLink to="/weather">Weather Forecast</NavLink></li>
                        <li><NavLink to="/view">Saved Forecasts</NavLink></li>
              					</ul>
              				</div>
              			</nav>
              		</div>
              	</div>
              </div>
                )
          }
      })

module.exports=Navbar;
