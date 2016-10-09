var React=require('react');
var ReactDOM=require('react-dom');
var Weather=require('./component/Weather.js');
var Navbar=require('./component/Navbar.js');
var Home=require('./component/Home.js');
var About=require('./component/About.js');
var StoredWeather=require('./component/StoredWeather.js');


var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var WeatherZone=React.createClass(
      {

         render:function(){

                return(<div>
                        <Navbar/>
                        <br/><br/><br/>
                        {this.props.children}
                     </div>)
          }
      })

ReactDOM.render(<Router history={hashHistory}>
                           <Route path='/' component={WeatherZone}>
                            <IndexRoute component={Weather}/>
                            <Route path='/weather' component={Weather}/>
                            <Route path='/view' component={StoredWeather}/>
                    </Route>

                </Router>,document.getElementById('app'));
