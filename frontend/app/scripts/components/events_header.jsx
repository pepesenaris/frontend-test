var React = require('react');
var Router = require('react-router');
var EventsHeader = React.createClass({

  render: function() {
    return (
      <header>
      	<Router.Link to="index">
          <h1>Events</h1>
        </Router.Link>
      </header>
    );
  }
});

module.exports = EventsHeader;
