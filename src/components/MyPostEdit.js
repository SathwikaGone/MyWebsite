import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editpost } from "../redux/actions";
import { useLocation } from "react-router-dom";

export default function MyPostEdit() {
  let post = useSelector(state => state.postReducer.post);
  let editpostclick = useSelector(state => state.postReducer.editpostclick);

  const dispatch = useDispatch();

  // const location = useLocation();
  // let id = location.state.id;
  // let editpostitem = post.reduce((prev, cv) => {
  //   if (cv.id === id) prev.push(cv);
  //   return prev;
  // }, []);
  // let p = editpostitem[0];
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const onSubmit = () => {
    const obj = {
      userId: editpostclick.userId,
      id: editpostclick.id,
      title: title,
      body: body
    };
    dispatch(editpost(obj));
    alert("Thanks for update");
    this.props.history.push("/Home");
  };

  return (
    <div>
      <form>
        <p style={{ textAlign: "center", fontSize: "1.5em", color: "white" }}>
          Edit post
        </p>
        <label>
          User Id
          <input readOnly name="userId" value={editpostclick.userId}></input>
        </label>
        <label>
          Item Id
          <input readOnly name="pid" value={editpostclick.id}></input>
        </label>
        <label>
          Title
          <textarea
            style={{ height: "3.5em" }}
            name="title"
            value={title}
            onChange={e => settitle(e.target.value)}
          ></textarea>
        </label>
        <label>
          Body
          <textarea
            name="body"
            value={body}
            onChange={e => setbody(e.target.value)}
          ></textarea>
        </label>
        <p>* Title and Body are editable</p>
        <button type="reset">Clear</button>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
