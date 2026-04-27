import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleGoToPosts = () => {
    navigate("/posts");
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать в учебное приложение!</p>
      <button onClick={handleGoToPosts}>Перейти к постам</button>
    </div>
  );
}

export default HomePage;
