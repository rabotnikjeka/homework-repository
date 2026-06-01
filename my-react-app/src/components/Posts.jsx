import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import styles from './Posts.module.css';

export default function Posts() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Посты</h1>

      {status === 'loading' && (
        <p className={styles.status}>Загрузка...</p>
      )}

      {status === 'failed' && (
        <p className={styles.error}>Ошибка: {error}</p>
      )}

      {status === 'succeeded' && (
        <>
          <p className={styles.count}>Всего постов: {data.length}</p>
          <ul className={styles.list}>
            {data.map((post) => (
              <li key={post.id} className={styles.item}>
                <span className={styles.postId}>#{post.id}</span>
                <div>
                  <p className={styles.postTitle}>{post.title}</p>
                  <p className={styles.postBody}>{post.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
