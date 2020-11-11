import React from "react";
import { Field, reduxForm } from "redux-form";
import propic from "../../assets/propic.png";
import { connect } from "react-redux";
import { createTweeet } from "../../actions";

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
    console.log(meta);
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
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createTweeet(formValues);
    // console.log(this.props);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
        <div className="form_body">
          <img className="propic" src={propic} alt="" />
          <Field
            name="tweeet"
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

const formWrapped = reduxForm({
  form: "postCreate",
  validate
})(PostCreate);

export default connect(null, { createTweeet })(formWrapped);
