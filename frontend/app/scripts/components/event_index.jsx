var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventList = require('./event_list');

var EventsIndex = React.createClass({

  render: function() {
    return (
      <Row>
        <Col sm={8}>
          <EventList> </EventList>
        </Col>

        <Col sm={4}>
        <ul>
          <li> event 1</li>
          <li> event 2</li>
        </ul>
        </Col>
      </Row>
    );
  }
});

module.exports = EventsIndex;
