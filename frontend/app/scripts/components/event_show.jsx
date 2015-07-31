var React = require('react');
var EventStore = require('../stores/event_store');

var EventShow = React.createClass({

  getInitialState: function(){
    console.log("Event show: ", this.props.params.id);
    event = EventStore.getEvent(this.props.params.id);
    return {
      id: event.id,
      name: event.title,
      location: event.location,
      description: event.description,
      url: event.eventImage,
      dates: event.dates
    };
  },

	render: function(){
		return (
      <div className="event-container well clearfix">
          <div className="col-sm-5 col-xs-12 nopadding event-image">
              <img src={this.state.url} alt=""></img>
          </div>
          <div className="col-sm-6 col-xs-12 nopadding event-content">
              <div className="event-date">
                  <div className="blurb">
                      {this.state.name}
                  </div>
                  <div className="event-location">
                      <div className="address">
                         {this.state.location}
                      </div>
                      <div className="clear-all"></div>
                  </div>
                  <hr />
                  <div className="pull-left">
                      <ul>
                          <li>{this.state.dates[0].split(' ')[0]}</li>
                          <li>{this.state.dates[0].split(' ')[1]}</li>
                      </ul>
                      <ul>
                          <li>{this.state.dates[1].split(' ')[0]}</li>
                          <li>{this.state.dates[1].split(' ')[1]}</li>
                      </ul>
                  </div>
                  <div className="clear-all"></div>
              </div>
          </div>
          <div className="clear-all"></div>
          <hr />
          <p className="general-text">
              {this.state.description}
          </p>
      </div>
      );
	}
});


module.exports = EventShow;