import "./PageContent.css";

function PostsFeed() {
  const posts = [
    {
      id: 1,
      title: "Первый пост",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nam.",
    },
    {
      id: 2,
      title: "Второй пост",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo asperiores voluptatum!",
    },
  ];

  return (
    <div className="page-content">
      <h2>Лента постов</h2>
      <p>Здесь будут отображаться все мои последние публикации</p>

      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PostsFeed;
