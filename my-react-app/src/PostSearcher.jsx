import { useState } from "react";
import "./App.css";
import PostRender from "./PostRender";

function PostSearcher() {
  const [inputValue, setInputValue] = useState("");
  const [post, setPost] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (inputValue <= 0) {
      setPost("");
      setError("Пост не найден");
      return;
    }
    try {
      setError("");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${inputValue}`,
      );

      if (!response.ok) {
        throw new Error("Пост не найден");
      }

      const data = await response.json();
      setPost(data);
    } catch (err) {
      setPost(null);
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="введите id поста"
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <button onClick={handleClick}>найти пост</button>
      <div>{post && <PostRender {...post} />}</div>
    </div>
  );
}

export default PostSearcher;
