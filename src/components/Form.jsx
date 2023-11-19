import { useState } from "react";
import plusLogo from "../assets/plus.svg";
import styles from "../modules/Form.module.css";

export function Form({ setTodoList, setIsFormActive }) {
  const [todo, setTodo] = useState({
    text: "",
    isDone: false,
    priority: false,
  });

  function handleAddTodoButtonClick(e) {
    e.preventDefault();
    setTodoList(todo);
    setIsFormActive();
  }

  return (
    <form className={styles.add_Form} onSubmit={handleAddTodoButtonClick}>
      <div className={styles.add_Input}>
        <input
          type="text"
          placeholder="Wpisz treść zadania..."
          maxLength="50"
          onChange={(e) =>
            setTodo((prevValue) => ({ ...prevValue, text: e.target.value }))
          }
          required
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.hasPriority}>
          <input
            type="checkbox"
            name="hasPriority"
            id="hasPriority"
            onChange={() =>
              setTodo((prevValue) => ({
                ...prevValue,
                priority: !prevValue.priority,
              }))
            }
          />
          <label htmlFor="hasPriority">ważne</label>
        </div>
        <button className={styles.add_Button}>
          <img src={plusLogo} />
          dodaj
        </button>
      </div>
    </form>
  );
}
