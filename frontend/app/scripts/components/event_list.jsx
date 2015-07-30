var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventStore = require('../stores/event_store');
var EventItem = require('./event_item');


var EventList = React.createClass({
  mixins: [Reflux.connect(EventStore, 'list')],

  getInitialState: function(){
    return{
      list: EventStore.getEvents()
    };
  },

  render: function(){
    console.log("in event list render -> getEvents:", EventStore.getEvents());
  	if (this.state.list) {
  		return (
  			<div>
		      {
		        this.state.list.map( function(event){
		          return (
                <Row key={event.id}>
                    <EventItem id={event.id} key={'event-' + event.id} start_datetime={event.dates[0]} name={event.title} location={event.location} image={event.eventImage} description={event.description}/>
                </Row>
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


