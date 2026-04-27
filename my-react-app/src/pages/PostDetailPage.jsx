import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetailPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Пост не найден");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Пост #{id}</h1>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
      <Link to="/posts">← Назад к списку</Link>
    </div>
  );
}

export default PostDetailPage;
