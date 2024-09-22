import React, { useState } from 'react';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? task : t
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    setIsEditing(true);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder={isEditing ? 'Edit task' : 'Add a new task'}
      />
      <button onClick={addTask}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
