import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";

const Todos = [
  { text: "Iść na spacer z  psem", isDone: false, priority: true, id: 3 },
  { text: "Odkurzyć dom", isDone: false, priority: false, id: 2 },
  { text: "Nakarmić psa", isDone: true, priority: false, id: 1 },
];

function App() {
  const [todosList, setTodosList] = useState(Todos);
  const [isFormActive, setIsFormActive] = useState(false);

  return (
    <>
      <div className="container">
        <Header
          quantity={todosList.length}
          setIsFormActive={() => setIsFormActive((prevValue) => !prevValue)}
          isButtonActive={isFormActive}
        />
        <main>
          {isFormActive && (
            <Form
              setTodoList={(todo) =>
                setTodosList((prevValue) => {
                  return [
                    {
                      text: todo.text,
                      isDone: false,
                      priority: todo.priority,
                      id: todosList.length + 1,
                    },
                    ...prevValue,
                  ];
                })
              }
              setIsFormActive={() => setIsFormActive((prevValue) => !prevValue)}
            />
          )}

          <article className="todos_Section">
            {todosList.map(({ text, isDone, priority, id }) => (
              <List
                key={id}
                text={text}
                isDone={isDone}
                priority={priority}
                id={id}
                onToggleClick={() => {
                  setTodosList((prevValue) =>
                    prevValue.map((todo) => {
                      if (todo.id !== id) {
                        return todo;
                      }

                      return {
                        ...todo,
                        isDone: !todo.isDone,
                      };
                    })
                  );
                }}
                onDeleteClick={() => {
                  setTodosList((prevValue) =>
                    prevValue.filter((todo) => todo.id !== id)
                  );
                }}
              />
            ))}
          </article>
        </main>
      </div>
    </>
  );
}

export default App;
