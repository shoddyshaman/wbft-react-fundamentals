import React from "react";

function AlertButton(props) {

  function alertMessage(message) {
    alert(message)
  }

  return (
  <button onClick={() => alertMessage(props.alertContent)}>
    Click me
  </button>
  )
}

export default AlertButton;
