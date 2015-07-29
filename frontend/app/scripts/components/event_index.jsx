var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var EventsIndex = React.createClass({

  getInitialState: function() {
    return {
      list: ["fdf", "fdsf", "event2"]
    };
  },
  render: function() {
    return (
      <Row>
      <Col sm={8}>
      <ul>
      {

        this.state.list.map( function(event){
          return (
            <li>
              {event}
            </li>
            );
        })
      }
      </ul>
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
