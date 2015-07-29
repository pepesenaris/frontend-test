var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;
var EventList = require('./event_list');
var TwitterButton = require('react-social').TwitterButton;


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
        <TwitterButton className="btn btn-info pull-right" url="" message={this.tweetMessage()}>
          Tweet
        </TwitterButton>
      </div>
      );
  },

  tweetMessage: function(){
    var chunks = ["Iré al ", this.props.name, " @ ", this.props.start_date, this.props.image]
    return  msg = chunks.join(" ");
  }

});

module.exports = EventItem;
