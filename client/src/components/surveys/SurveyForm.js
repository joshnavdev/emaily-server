import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { validateEmails } from './validations';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title', validate: null },
  { label: 'Subject Line', name: 'subeject', validate: null },
  { label: 'Email Body', name: 'body', validate: null },
  { label: 'Recipient List', name: 'emails', validate: validateEmails }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, validate }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          validate={validate}
        />
      )
    })
  }
  render = () => {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text" >
            next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
