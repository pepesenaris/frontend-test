var React = require('react');
var Router = require('react-router');
var EventsHeader = require('./events_header');
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({

  render: function() {

    return (
      <div className="App">
      	<EventsHeader/>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Layout;
