import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/users/usersSlice";
import styles from "./Users.module.css";

export default function Users() {
  const [name, setName] = useState("");
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    dispatch(addUser(trimmed));
    setName("");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.titleAccent}>USER</span>
        <span className={styles.titleMain}>LIST</span>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Введите имя..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.addBtn} type="submit">
          Добавить
        </button>
      </form>

      <p className={styles.counter}>
        Всего пользователей: <strong>{users.length}</strong>
      </p>

      {users.length === 0 ? (
        <div className={styles.empty}>
          Список пуст — добавьте первого пользователя
        </div>
      ) : (
        <ul className={styles.list}>
          {users.map((user, index) => (
            <li key={user.id} className={styles.item}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.userName}>{user.name}</span>
              <button
                className={styles.deleteBtn}
                onClick={() => dispatch(removeUser(user.id))}
                title="Удалить пользователя"
              >
                Х
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
