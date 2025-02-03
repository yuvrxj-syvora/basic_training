import React, { useState } from "react";

const ErrorProneComponent = () => {
  const [triggerError, setTriggerError] = useState(false);

  if (triggerError) {
    throw new Error("Oops! Something went wrong.");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Click the button to trigger an error</h2>
      <button onClick={() => setTriggerError(true)} style={{ padding: "10px", fontSize: "16px" }}>
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;
