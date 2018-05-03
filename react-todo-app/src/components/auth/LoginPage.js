import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const LoginPage = ({ errors, onClick, onChange, user }) => (
  <div className="Auth__login--container">
    <div className="Auth__login--title">
      <h2>Login</h2>
    </div>
    <div className="Auth__login--content">
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <TextField
        floatingLabelText="Email"
        name="email"
        errorText={errors.email}
        onChange={onChange}
        value={user.email}
        fullWidth={true}
      />

      <TextField
        floatingLabelText="Password"
        type="password"
        name="password"
        onChange={onChange}
        errorText={errors.password}
        value={user.password}
        fullWidth={true}
      />

      <div className="button-line">
        <br />
        <br />
        <RaisedButton onClick={onClick} label="Log in" primary />
      </div>
    </div>
  </div>
);

LoginPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginPage;
