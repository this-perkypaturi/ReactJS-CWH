import React from "react";
import PropTypes from "prop-types";

function Alert({ alert = "Enter your alert message" }) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{alert}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;

Alert.propTypes = {
  alert: PropTypes.string,
};
