import { memo } from "react";

const User = memo(function User({ name, age }) {
  console.log(`Рендер: ${name}`);

  return (
    <div>
      {name} — {age} лет
    </div>
  );
});

export default User;
