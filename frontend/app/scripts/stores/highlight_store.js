var Reflux = require('reflux');
var $ = require('jquery');
var HighlightActions = require('../actions/highlight_actions');

var HighlightStore = Reflux.createStore({
  listenables: [HighlightActions],
  events: [],
  baseUrl: 'http://localhost:3000/events/featured',

  init: function() {
    this.fetch();
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
          this.trigger(this.events);
      }
    });
  }
});

module.exports = HighlightStore;