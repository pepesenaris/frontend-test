var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;


var HighlightItem = React.createClass({

  render: function() {
    return (
      <div className="row row-content job-post-box">
        <ul className="listing-content">
          <li>
            <label className="regular-text"><h4>{this.props.name}</h4></label>
          </li>
          <li>
            <label className="register-list">{this.props.location}</label>
          </li>
          <li>
            <label className="salary">{this.props.start_date}</label>
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = HighlightItem;
