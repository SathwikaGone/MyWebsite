import React from "react";

export default function Messages({ message, author }) {
  return (
    <p>
      <i> {author}</i>: {message}
    </p>
  );
}
