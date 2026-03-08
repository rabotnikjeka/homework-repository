import { useState, useRef, useEffect } from "react";
import RenderCounter from "./RenderCounter";
import CustomButton from "./CustomButton";
function ControlledForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const renders = useRef(0);
  const focusRef = useRef(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorName("");
    setErrorPassword("");
    if (name === "" || password.length < 6) {
      if (password.length < 6) {
        setErrorPassword("Пароль должен содержать не менее 6 символов");
      }
      if (name === "") {
        setErrorName("Имя не должно быть пустым");
      }
    } else {
      console.log(`Name:${name} Password:${password}`);
      setName("");
      setPassword("");
    }
  };

  const renderCurrent = (renders.current += 1);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <CustomButton ref={focusRef} />
        <p style={{ color: "red" }}>{errorName}</p>
        <p style={{ color: "red" }}>{errorPassword}</p>
      </div>
      <RenderCounter renderCurrent={renders.current} />
    </form>
  );
}

export default ControlledForm;
