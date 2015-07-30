var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventList = require('./event_list');
var HighlightList = require('./highlight_list');
var Button = require('react-bootstrap').Button;

var EventsIndex = React.createClass({

  render: function() {
    return (
      <Row>
        <Col sm={8}>
          <EventList> </EventList>
        </Col>

        <Col sm={4}>
          <HighlightList> </HighlightList>
          <Button>Add event</Button>

        </Col>
      </Row>
    );
  }
});

module.exports = EventsIndex;
