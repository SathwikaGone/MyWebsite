import React from "react";
import * as Actions from "../../redux/actions";

function AddMessage() {
  let input;
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            // props.dispatch(Actions.addMessage(input.value, "Me"));
            input.value = "";
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
}
export default AddMessage;
