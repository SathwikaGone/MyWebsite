import React from "react";
import pageNotFount from "../Asserts/imageNotFound.png";

export default function NoMatch() {
  return (
    <div>
      <img id="pageNotFount" src={pageNotFount} alt="working on it" />
    </div>
  );
}
