# Smart Study Planner

A polished, frontend-only study productivity application built using HTML, CSS, and Vanilla JavaScript. It helps students plan focused study sessions, monitor completion, and keep upcoming work visible in one calm dashboard.

## Features

- Create, edit, delete, and complete study tasks without reloading.
- Set a subject, date, time, duration, priority, status, and optional description.
- Live dashboard totals for today's work, completion, pending tasks, planned hours, and overall progress.
- Instant search, filtering, and sorting.
- Upcoming and overdue task awareness.
- Subject-level task counts and CSS progress bars.
- Light/dark theme, responsive layout, keyboard-accessible modal forms, and toast feedback.
- Persistent data using browser `localStorage`, with realistic starter data on first use.

## Key Functionalities

Tasks are saved in the browser and every task action immediately refreshes the dashboard, progress overview, subject cards, and upcoming list. Subjects can only be removed when no task uses them, so task records remain intact.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, packages, backend, or external libraries are used.

## How It Works

Open the task form, provide the required study-session details, and save. Use the task controls to complete, edit, or delete work. The workspace controls filter and order your plan instantly.

## Local Storage

The app stores task data, subject names, and the selected theme in `localStorage`. Data persists across refreshes and browser restarts on the same browser profile.

## Project Structure

```
Smart_Study_Planner/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

Open `index.html` in any current desktop or mobile browser. No installation or server is required.

## Screenshots

Run the application locally and capture the dashboard state that best represents your study plan for your repository preview.

## Future Improvements

- Export and import local study data.
- Calendar and weekly schedule views.
- Custom study goals and reminder notifications.

## Author

Created as a Smart Study Planner portfolio project.
