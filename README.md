# React Task Manager

A simple task management application built using React. Users can add tasks, update their status, filter them, and delete them. Tasks are stored in the browser using Local Storage so they persist even after refreshing the page.

---

## Preview

![App Screenshot](screenshot.png)

---

## Features

* Add new tasks
* Update task status (Pending, In Progress, Done)
* Delete tasks
* Filter tasks by status
* Tasks saved using Local Storage
* Press **Enter** to quickly add tasks
* Responsive layout using Tailwind CSS

---

## Technologies Used

* React
* JavaScript (ES6)
* Tailwind CSS
* Local Storage API

---

## Project Structure

```
src
 ├── components
 │    └── Task.jsx
 ├── App.jsx
 ├── main.jsx
```

---

## How It Works

1. User enters a task in the input field.
2. When **Add Task** is clicked or **Enter** is pressed, the task is added to the list.
3. Each task can be marked as **Pending**, **In Progress**, or **Done**.
4. Tasks can be filtered based on their status.
5. Tasks can also be deleted.
6. All tasks are automatically saved in the browser using Local Storage.

---

## Installation

Clone the repository

```
https://github.com/ViJaya-kh22/react-task-manager.git

```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

## Future Improvements

* Edit task feature
* Drag and drop tasks
* Task deadlines
* Dark mode
* Task priority labels

---

## Author

Built as part of a React learning journey while practicing frontend development.
