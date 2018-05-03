import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const LoginPage = ({
  errors,
  handleOnChange,
  handleOnClick,
  user,
  handleOnKeyPress
}) => (
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
        onChange={handleOnChange}
        value={user.email}
        fullWidth={true}
        onKeyPress={handleOnKeyPress}
      />

      <TextField
        floatingLabelText="Password"
        type="password"
        name="password"
        onChange={handleOnChange}
        errorText={errors.password}
        value={user.password}
        fullWidth={true}
        onKeyPress={handleOnKeyPress}
      />

      <div className="button-line">
        <br />
        <br />
        <RaisedButton
          onClick={handleOnClick}
          onKeyPress={handleOnKeyPress}
          label="Log in"
          primary
        />
      </div>
    </div>
  </div>
);

LoginPage.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleOnKeyPress: PropTypes.func.isRequired
};

export default LoginPage;
