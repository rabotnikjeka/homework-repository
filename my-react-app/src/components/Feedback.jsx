import { useState } from "react";
import "./PageContent.css";

function Feedback() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("");
  };

  return (
    <div className="page-content">
      <h2>Обратная связь</h2>
      <p>Напишите мне ваше сообщение</p>

      {submitted && <div className="alert">Сообщение отправлено!</div>}

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ваше сообщение..."
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Feedback;
