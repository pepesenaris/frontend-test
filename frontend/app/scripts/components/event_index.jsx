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
    s = {margin: 15+'px'};
    return (
      <Row style={s}>
        <Col className="nopadding" sm={8}>
          <EventList> </EventList>
        </Col>

        <Col className="nopadding" sm={4}>
          <HighlightList> </HighlightList>
            <br/>
            <Router.Link to="new" className="btn btn-white-blue">
              Add event
            </Router.Link>

        </Col>
      </Row>
    );
  }
});

module.exports = EventsIndex;
