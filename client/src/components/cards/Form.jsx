import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Topic</label>
        <div>
          <Field
            name="card"
            component="input"
            type="text"
            placeholder="I think..."
            className="form-control"
          />
        </div>
      </div>
      <div>
        <button
          style={{marginRight:'10px'}}
          className="btn btn-lg btn-primary"
          type="submit"
          disabled={pristine || submitting}>
          Submit
        </button>

        <button
          type="button"
          className="btn btn-lg btn-secondary"
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
