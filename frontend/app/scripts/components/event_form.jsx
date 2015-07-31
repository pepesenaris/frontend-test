var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Formsy = require('formsy-react');
var FRC = require('formsy-react-components');
var Input = FRC.Input;
var Textarea = FRC.Textarea;

var sharedProps = {
  layout: 'vertical',
  validatePristine: false,
  disabled: false
};


var EventForm = React.createClass({

  submitForm: function(data){
    console.log(data);
  },

  resetForm: function() {
    this.refs.form.reset();
  },

	render: function(){
		return (
			 <Formsy.Form className='' onSubmit={this.submitForm} ref="form">
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
          />
        </Col>
        </Row>
        <Row layout='vertical'>
          <input className="btn event-list-btn" onClick={this.resetForm} type="reset" defaultValue="Reset" />
          {' '}
          <input className="btn btn-white-blue" formNoValidate={true} type="submit" defaultValue="Create" />
        </Row>
        </Grid>
			 </Formsy.Form>
			);
	}
});


module.exports = EventForm;