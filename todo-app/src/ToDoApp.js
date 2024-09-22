import React, { useState, useEffect } from 'react';
import './ToDoApp.css';

function ToDoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task.trim()) return; // Prevent empty task
    if (isEditing) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
    setIsEditing(true);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="todo-app">
      <h1>Advanced ToDo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder={isEditing ? 'Edit task' : 'Add a new task'}
        />
        <button onClick={addTask}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      {tasks.length > 0 && (
        <>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <span onClick={() => toggleCompletion(index)}>
                  {task.text}
                </span>
                <div>
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => removeTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={clearAllTasks}>
            Clear All Tasks
          </button>
        </>
      )}
      {tasks.length === 0 && <p>No tasks added yet!</p>}
    </div>
  );
}

export default ToDoApp;
