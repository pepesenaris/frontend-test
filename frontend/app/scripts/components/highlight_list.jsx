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
          <HighlightItem
            key={event.id}
            name={event.title}
            image={event.eventImage}
            location={event.location}
            start_date={event.dates[0]}
            short_desc={event.description.substring(0, 15)} >
          </HighlightItem>
          );
        })
      );
  },

  render: function(){
    return (
      <div>
        <h3>Highlights</h3>
        <div>
          { this.state.highlights.length > 0 ?  this.items(): "No events found" }
        </div>
      </div>
      );
  }

});

module.exports = HighlightList;