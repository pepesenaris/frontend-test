var Reflux = require('reflux');
var $ = require('jquery');
var EventActions = require('../actions/event_actions');

init_called = false;

var EventStore = Reflux.createStore({
  listenables: [EventActions],
  events: {},
  baseUrl: 'http://localhost:3000/events',

  init: function() {
    if (init_called)
      return;

    init_called = true;
    this.fetchEvents();
  },

  getEvents: function(){
    var result = [];
    for (var id in this.events)
      result.push(this.events[id]);
    return result;
  },

  fetchEvents: function() {
    $.ajax({
      url: this.baseUrl,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      context: this,
      success: function(data) {
          console.log("event_store success", data.events);
          res = data.events;
          for (var i = 0; i < res.length; i++) {
            ev = res[i];
            this.events[ev.id] = res[i];
          }
          this.trigger(this.getEvents());
      }
    });
  }
});

module.exports = EventStore;