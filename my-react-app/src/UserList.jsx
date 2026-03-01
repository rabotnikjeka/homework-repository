import User from "./User";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
