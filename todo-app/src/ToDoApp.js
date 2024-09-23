import React, { useState, useEffect } from 'react';
import './ToDoApp.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { format } from 'date-fns';

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
  const [dueDate, setDueDate] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Priority');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleInputChange = (e) => setTask(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);

  const addTask = () => {
    if (!task.trim()) return; // Prevent empty task
    const newTask = {
      text: task,
      completed: false,
      priority,
      category,
      dueDate: dueDate ? new Date(dueDate) : null,
    };

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
    setDueDate('');
  };

  const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.text);
    setPriority(taskToEdit.priority);
    setCategory(taskToEdit.category);
    setDueDate(taskToEdit.dueDate ? format(taskToEdit.dueDate, 'yyyy-MM-dd') : '');
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || task.priority === filter || task.category === filter || (filter === 'Completed' && task.completed))
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'Priority':
          return PRIORITY_OPTIONS.indexOf(a.priority) - PRIORITY_OPTIONS.indexOf(b.priority);
        case 'Due Date':
          return a.dueDate && b.dueDate ? a.dueDate - b.dueDate : 0;
        case 'Completion':
          return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        default:
          return 0;
      }
    });

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(filteredTasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(reorderedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Advanced ToDo App</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Filter and Sort Options */}
      <div className="filter-sort-options">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          {PRIORITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} Priority
            </option>
          ))}
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="Completed">Completed</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="Priority">Priority</option>
          <option value="Due Date">Due Date</option>
          <option value="Completion">Completion Status</option>
        </select>
      </div>

      {/* Task Input */}
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder={isEditing ? 'Edit task' : 'Add a new task'}
        />
        <input
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
          className="due-date"
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

      {/* Task List */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTasks.map((task, index) => (
                <Draggable key={index} draggableId={task.text} index={index}>
                  {(provided) => (
                    <li
                      className={task.completed ? 'completed' : ''}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <span onClick={() => toggleCompletion(index)}>
                        {task.text} {task.dueDate && `| Due: ${format(task.dueDate, 'yyyy-MM-dd')}`} [{task.priority} | {task.category}]
                      </span>
                      <div>
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => removeTask(index)}>Delete</button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {filteredTasks.length > 0 && (
        <button className="clear-btn" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default ToDoApp;
