var Reflux = require('reflux');
var $ = require('jquery');
var HighlightActions = require('../actions/highlight_actions');
var EventActions = require('../actions/event_actions');

highlights_init = false;

var HighlightStore = Reflux.createStore({
  listenables: [HighlightActions],
  events: [],
  baseUrl: 'http://localhost:3000/events/featured',

  init: function() {
    if (highlights_init)
      return;
    highlights_init = true;
    this.fetch();
    this.listenTo(EventActions.createEvent, this.fetch);
  },

  getEvents: function(){
    return this.events;
  },

  fetch: function() {
    $.ajax({
      url: this.baseUrl,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      context: this,
      success: function(data) {
          console.log("highlight succes: ", data.events);
          this.events = data.events;
          this.trigger(this.getEvents());
      }
    });
  }
});

module.exports = HighlightStore;