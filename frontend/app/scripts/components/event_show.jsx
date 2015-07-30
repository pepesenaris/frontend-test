var React = require('react');
var EventStore = require('../stores/event_store');

var EventShow = React.createClass({

  getInitialState: function(){
    console.log("Event show: ", this.props.params.id);
    event = EventStore.getEvent(this.props.params.id);
    return {
      id: event.id,
      name: event.title,
      location: event.location,
      description: event.description,
      url: event.eventImage,
      dates: event.dates
    };
  },

	render: function(){
		return (
      <div>
        Name: {this.state.name}
        <br/>
        "Location": {this.state.location}
        <br/>
        Description: {this.state.description}
        <br/>
        Url: {this.state.url}
      </div>
      );
	}
});


module.exports = EventShow;