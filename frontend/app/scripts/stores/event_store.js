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

  getEvent: function(id){
    //TODO: Fetch the id from the api if not stored yet
    return this.events[id];
  },

  createEvent: function(data){
    dates_info = [ data.date_start, data.date_end];

    //TODO: Use moment.js to parse dates
    var event_data = {
      title: data.title,
      eventImage: data.url,
      description: data.description,
      location: data.location,
      dates: dates_info.map(function(elem) {
        return new Date(elem);
      })
    };

    this.postEvent(event_data)
    .done(function(res){
      var ev = res.event;
      this.events[ev.id] = ev;
      this.trigger(this.getEvents());
    })
    .fail(function(res){
      console.log("failed response: ", res);
    });
  },

  postEvent: function(event_data){
    return $.ajax({
      url: this.baseUrl,
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({event: event_data}),
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      crossDomain: true,
      cache: false,
      context: this
    });
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