var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;


var HighlightItem = React.createClass({

  render: function() {
    return (
      <Panel footer={this.props.location}>
        {this.props.start_date}
        <br/>
        <Label bsSize="large">{this.props.name}</Label>
        <br/>
        {this.props.short_desc}
      </Panel>
    );
  }

});

module.exports = HighlightItem;
