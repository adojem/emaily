// SurveyFromReview shows users thier from inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formField';
import * as actions from '../../actions';

const SurveyFormReview = ({
   onCancel, formValues, submitSurvey, history,
}) => {
   const reviewFields = _.map(formFields, ({ name, label }) => (
      <div key={name}>
         <label>{label}</label>
         <div>{formValues[name]}</div>
      </div>
   ));

   return (
      <div>
         <h5>Please connfirm your entries</h5>
         {reviewFields}
         <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>
            Back
         </button>
         <button
            onClick={() => submitSurvey(formValues, history)}
            className="green white-text btn-flat right"
         >
            Send Survey
            <i className="material-icons right">email</i>
         </button>
      </div>
   );
};

function mapStateToProps(state) {
   return { formValues: state.form.surveyForm.values };
}

export default connect(
   mapStateToProps,
   actions,
)(withRouter(SurveyFormReview));
