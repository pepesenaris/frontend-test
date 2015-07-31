var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var Input = FRC.Input;
var Textarea = FRC.Textarea;
var EventActions = require('../actions/event_actions');

var sharedProps = {
  layout: 'vertical',
  validatePristine: false,
  disabled: false
};


var EventForm = React.createClass({

  getInitialState: function(){
    return{
      canSubmit: false
    };
  },

  submitForm: function(data){
    console.log(data);
    EventActions.createEvent(data);
  },

  resetForm: function() {
    this.refs.form.reset();
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

	render: function(){
		return (
			 <Formsy.Form className='' onSubmit={this.submitForm} onValid={this.enableButton} onInvalid={this.disableButton}  ref="form">
        <Grid className="container">
        <h2>New Event</h2>
        <hr/>
        <Row>
        <Col sm={6}>
        <fieldset>
          <Input
              {...sharedProps}
              name="title"
              id="title-text"
              value=""
              label="Name"
              type="text"
              placeholder="Event Name."
              required
          />
          <Input
              {...sharedProps}
              name="url"
              id="image-url"
              value=""
              label="Image URL"
              type="text"
              placeholder="Event URL."
              required
          />
          <Input
              {...sharedProps}
              name="location"
              id="location-text"
              value=""
              label="Location"
              type="text"
              placeholder="Event Location."
              required
          />
        </fieldset>
        </Col>
        <Col sm={6}>
          <fieldset>
            <Input
              {...sharedProps}
              name="date_start"
              value=""
              label="Begin @"
              type="date"
              placeholder="Start date."
              required
          />
          <Input
              {...sharedProps}
              name="date_end"
              value=""
              label="End @"
              type="date"
              placeholder="End date."
              required
          />
          </fieldset>
        </Col>
        <Col sm={12}>
          <Textarea
              {...sharedProps}
              rows={3}
              cols={40}
              name="desc"
              label="Description"
              placeholder="Event description."
              validations="minLength:10"
              validationErrors={{
                  minLength: 'Please provide at least 10 characters.'
              }}
              required
          />
        </Col>
        </Row>
        <Row layout='vertical' style={{marginBottom: 30+'px'}}>
          <input className="btn event-list-btn" onClick={this.resetForm} type="reset" defaultValue="Reset" />
          {' '}
          <input className="btn btn-white-blue" formNoValidate={true} type="submit" disabled={!this.state.canSubmit} defaultValue="Create" />
        </Row>
        </Grid>
			 </Formsy.Form>
			);
	}
});


module.exports = EventForm;