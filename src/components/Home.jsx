import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const completedExists = todos.some(todo => todo.isCompleted);
  const [showFinished, setShowFinished] = useState(completedExists);

  
  useEffect(() => {
    const todosString = localStorage.getItem("todos");
    if (todosString) {
      const parsed = JSON.parse(todosString);
      setTodos(parsed);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  useEffect(() => {
    const completed = todos.some(todo => todo.isCompleted);
    setShowFinished(completed); 
  }, [todos]);

  const handleChange = (e) => setTodo(e.target.value);

  const handleADD = () => {
    if (!todo.trim()) {
      alert("Please enter a todo before adding!");
      return;
    }

    const isDuplicate = todos.some(item => item.todo.toLowerCase() === todo.toLowerCase());
    if (isDuplicate) {
      alert("This todo already exists!");
      setTodo("");
      return;
    }

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);
    setTodos(todos.filter(item => item.id !== id));
  };

  const handleDelete = (e, id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    setTodos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <div className="container mx-auto my-5 px-4 sm:px-6 md:px-8 rounded-xl p-5 bg-gray-900 text-white min-h-[80vh] w-full max-w-2xl">
  <div className="addTodo flex flex-col gap-3">
    <h1 className="text-lg font-bold text-center">Add a Todo</h1>
    <input
      onChange={handleChange}
      value={todo}
      type="text"
      className="bg-gray-800 text-white w-full border border-gray-600 rounded p-2"
      placeholder="Enter your todo..."
    />
    <button
      onClick={handleADD}
      className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md w-full sm:w-1/2 md:w-1/4 self-center"
    >
      Add
    </button>
  </div>

  {todos.length > 0 && (
    <div className="mt-4">
      <input
        type="checkbox"
        onChange={toggleFinished}
        checked={showFinished}
        className="mr-2"
      />
      Show Finished
    </div>
  )}

  <h2 className="text-lg font-bold mt-4">Your Todos</h2>
  <div className="todos">
  {todos.length === 0 && <div className="m-5">No Todos to display</div>}

  {todos.map(item => (
    (showFinished || !item.isCompleted) && (
      <div
        key={item.id}
        className="todo w-full my-3 bg-gray-800 p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
      >
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name={item.id}
            checked={item.isCompleted}
            className="h-4 w-4"
          />
          <p className={`text-sm sm:text-base break-all ${item.isCompleted ? 'line-through text-gray-400' : ''}`}>
            {item.todo}
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={(e) => handleEdit(e, item.id)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md text-sm text-white font-semibold"
          >
            Edit
          </button>
          <button
            onClick={(e) => handleDelete(e, item.id)}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md text-sm text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    )
  ))}
</div>

</div>

  );
};

export default Home;
