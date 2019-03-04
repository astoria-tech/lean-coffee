import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Your Topic: </label>
        <div>
          <Field
            name="card"
            component={renderTextField}
          />
        </div>
      </div>
      <div>
        <button
          style={{marginRight:'10px'}}
          type="submit"
          disabled={pristine || submitting}>
          Submit
        </button>

        <button
          type="submit"
          disabled={pristine || submitting}
          onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'cards'
})(Form)
