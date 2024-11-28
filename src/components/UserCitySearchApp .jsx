import { useState, useEffect } from "react";

const UserCitySearchApp = () => {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setSortedTodos(data); // Initialize sorted data
      });
  }, []);

  const handleSort = (field) => {
    // Toggle sort on/off for the same field
    if (sortBy === field) {
      setSortedTodos(todos); // Reset to default order if toggled off
      setSortBy("");
      return;
    }

    let sorted = [];
    if (field === "completed") {
      sorted = [...todos].sort((a, b) => a.completed - b.completed); // Sort by completion status
    } else {
      sorted = [...todos].sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      }); // Sort by title
    }

    setSortedTodos(sorted);
    setSortBy(field);
  };

  return (
    <div>
      <h1>Todos</h1>

      <div>
        <label>
          <input
            type="checkbox"
            checked={sortBy === "title"}
            onChange={() => handleSort("title")}
          />
          Sort by Title
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortBy === "completed"}
            onChange={() => handleSort("completed")}
          />
          Sort by Completed Status
        </label>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {sortedTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCitySearchApp;
