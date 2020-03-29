import React from "react";

interface iProps {
  message: string;
  author: string;
}
const Messages: React.FC<iProps> = ({ message, author }) => {
  return (
    <p>
      <i> {author}</i>: {message}
    </p>
  );
};
export default Messages;

// const Header: React.FC<iProps> = (props: iProps) => (
