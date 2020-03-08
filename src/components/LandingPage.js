import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createpost } from "../redux/actions";

function LandingPage() {
  const list = useSelector(state => state.postReducer.post);

  const dispatch = useDispatch();

  const [userId, setuserId] = useState("");
  const [pid, setpid] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const onSubmit = () => {
    const obj = { userId: userId, pid: pid, title: title, body: body };

    dispatch(createpost(obj));
  };

  //   useEffect(() => {
  //     const newList = dispatch(readpost());
  //     setList(newList);
  //   }, [input]);
  return (
    <div>
      <form>
        <p style={{ textAlign: "center" }}> create new post</p>
        <label>
          User Id
          <input
            name="userId"
            value={userId}
            onChange={e => setuserId(e.target.value)}
          ></input>
        </label>
        <label>
          Item Id
          <input
            name="pid"
            value={pid || ""}
            onChange={e => setpid(e.target.value)}
          ></input>
        </label>
        <label>
          Title
          <input
            name="title"
            value={title || ""}
            onChange={e => settitle(e.target.value)}
          ></input>
        </label>
        <label>
          Body
          <input
            name="body"
            value={body || ""}
            onChange={e => setbody(e.target.value)}
          ></input>
        </label>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default LandingPage;

//after form
// <div>
// <p>Posts:</p>
// <div className="allposts">
//   {list.map(post => (
//     <div className="singlepost">
//       <p>Title: {post.title}</p>
//       <br /> <p>Body: {post.body}!</p>
//       <br />
//       <button
//         style={{ maxWidth: "50px" }}
//         onClick={e => this.deletePost(e, post.id)}
//       >
//         &times;
//       </button>
//     </div>
//   ))}
// </div>
// </div>
