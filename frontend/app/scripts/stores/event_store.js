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
    console.log('In event store, this is data: ', data);

    dates_info = [ data.date_start, data.date_end];

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
      console.log("response: ", res)
    })
    .fail(function(res){
      console.log("response: ", res)
    });
    //alert('In createEvent @ store, this is event: '  + JSON.stringify(event_data));
  },

  postEvent: function(event_data){
    return $.ajax({
      url: this.baseUrl,
      type: 'POST',
      dataType: 'json',
      data: event_data,
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