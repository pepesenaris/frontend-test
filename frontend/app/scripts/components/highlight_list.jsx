var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var HighlightStore = require('../stores/highlight_store');
var HighlightItem = require('./highlight_item');

var HighlightList = React.createClass({
  mixins: [Reflux.connect(HighlightStore, 'highlights')],

  getInitialState: function(){
    return {
      highlights: []
    };
  },

  items: function(){
    return (
      this.state.highlights.map( function(event){
        return (
          <HighlightItem key={event.id} start_date={event.dates[0]} name={event.title} event={event} image={event.eventImage} location={event.location} short_desc={event.description.substring(0, 15)} ></HighlightItem>
          );
        })
      );
  },

  render: function(){
  	if (this.state.highlights) {
  		return (
  			<div>
		      { this.items() }
		    </div>
  			);
  	}
    else
    {
      return (<div> No events found </div>);
    }
  }

});

module.exports = HighlightList;