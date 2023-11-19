import plusLogo from "../assets/plus.svg";
import styles from "../modules/Header.module.css";

export function Header({ quantity, setIsFormActive, isButtonActive }) {
  switch (true) {
    case quantity == 0:
      quantity = "brak zadań";
      break;
    case quantity == 1:
      quantity = "1 zadanie";
      break;
    case quantity > 1 && quantity < 5:
      quantity = `${quantity} zadania`;
      break;
    case quantity >= 5:
      quantity = `${quantity} zadań`;
      break;
  }

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.main_heading}>Do zrobienia</h1>
        <h2 className={styles.secondary_heading}>{quantity}</h2>
      </div>
      {!isButtonActive && (
        <div>
          <button className={styles.add_Button} onClick={setIsFormActive}>
            <img className={styles.add_Icon} src={plusLogo} />
            dodaj zadanie
          </button>
        </div>
      )}
    </header>
  );
}
