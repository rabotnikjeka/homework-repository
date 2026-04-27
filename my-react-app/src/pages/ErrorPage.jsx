import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Что-то пошло не так</h1>
      <p>{error?.statusText || error?.message || "Неизвестная ошибка"}</p>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default ErrorPage;
