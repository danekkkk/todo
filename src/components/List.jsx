import binLogo from "../assets/bin.svg";
import exclamationMarkLogo from "../assets/exclamation_mark.svg";
import styles from "../modules/List.module.css";

export function List({
  text,
  isDone,
  priority,
  id,
  onToggleClick,
  onDeleteClick,
}) {
  return (
    <div className={styles.todo}>
      <div>
        <input
          type="checkbox"
          name="isDone"
          id={`list#${id}`}
          defaultChecked={isDone}
          onChange={onToggleClick}
        />
        <label
          className={`${isDone ? styles.isDone : ""}`}
          htmlFor={`list#${id}`}
        >
          {text}
        </label>
      </div>

      {priority && !isDone && (
        <span className={styles.exclamation}>
          <img src={exclamationMarkLogo} />
        </span>
      )}

      {isDone && (
        <button className={styles.delete_Button} onClick={onDeleteClick}>
          <img src={binLogo} />
        </button>
      )}
    </div>
  );
}
