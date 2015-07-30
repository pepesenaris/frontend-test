var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventList = require('./event_list');
var HighlightList = require('./highlight_list');
var Button = require('react-bootstrap').Button;
var Router = require('react-router');

var EventsIndex = React.createClass({

  render: function() {
    return (
      <Row>
        <Col sm={8}>
          <EventList> </EventList>
        </Col>

        <Col sm={4}>
          <HighlightList> </HighlightList>
            <Router.Link to="new_event" className="btn btn-primary">
              Add event
            </Router.Link>

        </Col>
      </Row>
    );
  }
});

module.exports = EventsIndex;
