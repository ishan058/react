import React, { useState, useEffect } from 'react';
import './ToDoApp.css';

const PRIORITY_OPTIONS = ['Low', 'Medium', 'High'];
const CATEGORY_OPTIONS = ['General', 'Work', 'Personal'];

function ToDoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => setTask(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const addTask = () => {
    if (!task.trim()) return; // Prevent empty task
    const newTask = { text: task, completed: false, priority, category };
    if (isEditing) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? newTask : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setTask('');
    setPriority('Medium');
    setCategory('General');
  };

  const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.text);
    setPriority(taskToEdit.priority);
    setCategory(taskToEdit.category);
    setEditIndex(index);
    setIsEditing(true);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => setTasks([]);

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="todo-app">
      <h1>Advanced ToDo App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder={isEditing ? 'Edit task' : 'Add a new task'}
        />
        <select value={priority} onChange={handlePriorityChange}>
          {PRIORITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} Priority
            </option>
          ))}
        </select>
        <select value={category} onChange={handleCategoryChange}>
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={addTask}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      {sortedTasks.length > 0 ? (
        <>
          <ul className="task-list">
            {sortedTasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <div>
                  <span onClick={() => toggleCompletion(index)}>
                    {task.text} [{task.priority} | {task.category}]
                  </span>
                  <div>
                    <button onClick={() => editTask(index)}>Edit</button>
                    <button onClick={() => removeTask(index)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={clearAllTasks}>
            Clear All Tasks
          </button>
        </>
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
}

export default ToDoApp;
