import { Router, Route, hashHistory } from 'react-router';



var App = React.createClass({
	render:function(){
	        return <div>App</div>;
	}

});


var App2 = React.createClass({
	render:function(){
	        return <div>App2</div>;
	}

});


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/app2" component={App2}/>
  </Router>
), document.getElementById('app'));