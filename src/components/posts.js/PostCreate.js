import React from "react";
import { Field, reduxForm } from "redux-form";
import propic from "../../assets/propic.png";

class PostCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="errormsg">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  //helper method for Field. it will be a controlled element
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
        {/* <div className="errormsg">{meta.error}</div> */}
      </div>
    );
  };

  //handleing submission
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
        <div className="form_body">
          <img className="propic" src={propic} alt="" />
          <Field
            name="post"
            component={this.renderInput}
            label="What's happening?"
          />
        </div>

        <button className="button">Tweeet</button>
      </form>
    );
  }
}

//validate form input
const validate = formValues => {
  const errors = {};

  if (!formValues.post) {
    // only ran if user didnot give any title
    errors.post = "Enter a post!";
  }
  return errors;
};

export default reduxForm({
  form: "postCreate",
  validate
})(PostCreate);
