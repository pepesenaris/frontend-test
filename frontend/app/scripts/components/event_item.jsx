var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;
var EventList = require('./event_list');

var EventItem = React.createClass({

  render: function() {
    s = {
      backgroundImage: 'url(' + this.props.image+ ')'
    };
    return (
      <Panel  style={s} footer={this.footer()}>
        {this.props.start_date}
        <Label bsSize="large">{this.props.name}</Label>
      </Panel>
    );
  },

  footer: function(){
    return ( 
      <div>
        <Button bsStyle='primary'>View</Button>
        <Button bsStyle='info' className="pull-right">Tweet</Button>
      </div>
      );
  }
});

module.exports = EventItem;
