import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить посты");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value) {
      setSearchParams({ filter: value });
    } else {
      setSearchParams({});
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Лента постов</h1>

      <div className="filter-controls">
        <label htmlFor="filter-select">Фильтр: </label>
        <select id="filter-select" value={filter} onChange={handleFilterChange}>
          <option value="">Без фильтра</option>
          <option value="top">top</option>
        </select>
      </div>

      {filter && <p className="filter">Фильтр: {filter}</p>}

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
