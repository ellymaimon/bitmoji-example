import { useState } from "react";
import initialComments from "./initialComments";
import CommentList from "./CommentList";

function App() {
  const [comments, setComments] = useState(initialComments)

  return (
    <CommentList comments={comments} setComments={setComments}/>
    );
}

export default App;
