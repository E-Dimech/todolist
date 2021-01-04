import React from "react";

function NewItem({ updateList }) {
  const addTodo = (e) => {
    e.preventDefault();
    const todoObject = {
      id: Date.now(),
      name: e.target.todo.value,
      done: false,
    };
    updateList(todoObject);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input name="todo" type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewItem;
