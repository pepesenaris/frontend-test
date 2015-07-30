var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var EventIndex = require('./components/event_index');
var EventForm = require('./components/event_form');
var EventShow = require('./components/event_show');

var routes = (
	<Route handler={Layout}>
		<DefaultRoute handler={EventIndex}/>
    <Route name="new" path="event/new" handler={EventForm}/>
    <Route name="show" path="event/:id" handler={EventShow}/>
	</Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
