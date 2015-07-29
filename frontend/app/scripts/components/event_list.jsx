var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var EventStore = require('../stores/event_store');


var EventList = React.createClass({
  mixins: [Reflux.connect(EventStore, 'list')],

  render: function(){
  	if (this.state.list) {
  		return (
  			<ul>
		      {
		        this.state.list.map( function(event){
		          return (
		            <li key={event.id}>
		              {event.id}
		              {event.title}
		            </li>
		            );
		        })
		      }
		      </ul>
  			);
  	}
    else
    {
      return (<div> No events found <div/>);
    }
  }

});

module.exports = EventList;


