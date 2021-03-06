var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;
var TwitterButton = require('react-social').TwitterButton;
var Router = require('react-router');
var Link = Router.Link;


var EventItem = React.createClass({

  start_date: function(){
    return this.props.start_datetime.split(' ')[0];
  },

  start_time: function(){
    return this.props.start_datetime.split(' ')[1];
  },

  render: function() {
    // s = {
    //   backgroundImage: 'url(' + this.props.image+ ')'
    // };
    s = {
      width: 150+'px',
      marginTop: 5+'px'
    };
    return (
      <div>
        <div className="col-xs-12 col-sm-2 event-image event-list-margin">
          <img src={this.props.image}  style={s}></img>
        </div>
        <div className="col-xs-12 col-sm-10 event-list-margin">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="event-date">
                <div className="pull-left event-list-date">
                  <ul>
                      <li>{this.start_date()}</li>
                      <li>{this.start_time()}</li>
                  </ul>
                  <span className="pull-left under-line">&nbsp;&nbsp;</span>
                </div>
                <div className="clear-all"></div>
                <div>
                    <div className="col-xs-12 col-sm-7 event-resume">
                      <div className="blurb">
                        {this.props.name}
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-5 event-list-add">
                      <div className="event-location">
                        <div className="address address-border">{this.props.location}</div>
                        <div className="clear-all"></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="buy-info event-list-date" style={{position: 'absolute'}}>
                <Link to="show" className="btn btn-white-blue" params={{ id: this.props.id }}>Read More</Link>
                <TwitterButton className="btn btn-default btn-blue-job twitter-btn" style={{position: 'relative', left: 50+'px'}}url="" message={this.tweetMessage()}>
                  Tweet
                </TwitterButton>
              </div>
              <div className="clear-all"></div>
            </div>
          </div>
        </div>
      </div>
      // <Panel  style={s} footer={this.footer()}>
      //   {this.props.start_datetime}
      //   <Label bsSize="large">{this.props.name}</Label>
      // </Panel>
    );
  },

  footer: function(){
    return (
      <div>
        <Button bsStyle='primary'>View</Button>
        <TwitterButton className="btn btn-info pull-right" url="" message={this.tweetMessage()}>
          Tweet
        </TwitterButton>
      </div>
      );
  },

  tweetMessage: function(){
    var chunks = ["Iré al ", this.props.name, " @ ", this.props.start_date, this.props.image]
    return  msg = chunks.join(" ");
  }

});

module.exports = EventItem;
