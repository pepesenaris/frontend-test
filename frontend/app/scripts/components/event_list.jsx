var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventStore = require('../stores/event_store');
var EventItem = require('./event_item');


var EventList = React.createClass({
  mixins: [Reflux.connect(EventStore, 'list')],

  render: function(){
  	if (this.state.list) {
  		return (
  			<div>
		      {
		        this.state.list.map( function(event){
		          return (
                  <EventItem event={event}/>
		            );
		        })
		      }
		      </div>
  			);
  	}
    else
    {
      return (<div> No events found </div>);
    }
  }

});

module.exports = EventList;


