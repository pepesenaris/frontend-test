var Reflux = require('reflux');
var $ = require('jquery');
var EventActions = require('../actions/event_actions');

var EventStore = Reflux.createStore({
  listenables: [EventActions],
  events: [],
  baseUrl: 'http://localhost:3000/events',

  init: function() {
    this.fetchEvents();
  },

  fetchEvents: function() {
    $.ajax({
      url: this.baseUrl,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      context: this,
      success: function(data) {
          console.log(data.events);
          this.events = data.events;
          this.trigger(this.events);
      }
    });
  }
});

module.exports = EventStore;