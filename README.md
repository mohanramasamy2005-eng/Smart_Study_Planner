<div align="center">

# 📚 Smart Study Planner

### Plan smarter. Study better. Stay consistent.

A modern, responsive study productivity dashboard built with pure HTML, CSS, and JavaScript.

[Features](#features) · [Tech Stack](#tech-stack) · [Getting Started](#getting-started) · [Future Improvements](#future-improvements)

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive_UI-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=222222)
![LocalStorage](https://img.shields.io/badge/Storage-localStorage-3559D6?style=flat-square)
![Responsive](https://img.shields.io/badge/Design-Responsive-17855D?style=flat-square)

</div>

Smart Study Planner helps students organize study tasks, plan focused sessions, track progress, manage subjects, and stay aware of upcoming deadlines from one clean dashboard.

## ✨ Preview

> 📸 **Project Preview:** Add a screenshot of the dashboard here.

## 🎯 Why Smart Study Planner?

Students often manage assignments, study sessions, deadlines, and subjects across multiple tools. Smart Study Planner brings those essentials together in a focused workspace designed to make the next study session clear.

<a id="features"></a>

## ✨ Features

| Area | What it does |
| --- | --- |
| 📊 **Dashboard** | Calculates today's tasks, completion, pending work, study time, and overall progress. |
| 📝 **Task Management** | Create, edit, delete, complete, and update the status of study tasks. |
| 📚 **Subject Management** | Organize tasks by subject and review subject-level completion. |
| 🔎 **Search & Filters** | Search by task or subject; filter by schedule, status, and priority. |
| 📈 **Progress Tracking** | Displays live overall and subject-wise progress indicators. |
| ⏰ **Deadline Awareness** | Keeps upcoming tasks visible and flags incomplete overdue work. |
| 🌙 **Theme Support** | Switch between light and dark colour themes. |
| 💾 **Local Persistence** | Saves tasks, subjects, and theme preference in the browser. |
| 📱 **Responsive Design** | Adapts cleanly from desktop to mobile screens. |
| ♿ **Accessibility** | Uses labelled form controls, visible focus states, and keyboard-friendly modals. |

## 🧠 Core Functionality

1. Create a study task with a title, subject, priority, date, time, duration, and status.
2. Add an optional description to clarify the study objective.
3. Update, complete, or remove tasks directly from the dashboard.
4. Search, filter, and sort the study plan instantly.
5. Monitor dashboard totals and subject-level completion as tasks change.
6. Review upcoming sessions and incomplete overdue work.
7. Keep working after refreshes—data persists automatically in `localStorage`.

<a id="tech-stack"></a>

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic application structure and accessible forms. |
| CSS3 | Responsive layout, theme styling, transitions, and progress visuals. |
| Vanilla JavaScript | Task logic, dynamic rendering, modal interactions, filters, and calculations. |
| Browser `localStorage` | Client-side persistence for tasks, subjects, and theme preference. |

## 🚀 Application Highlights

- Dynamic dashboard calculations derived from real task data.
- Lightweight client-side state management with immediate UI updates.
- Reusable JavaScript rendering and interaction functions.
- Instant task filtering, searching, and sorting.
- Subject-level progress calculation with CSS-based visual indicators.
- Responsive, component-like interface structure with no framework dependencies.

## 💾 Data Persistence

This is a frontend-only application. Tasks, subjects, and the selected theme are stored in browser `localStorage`, so they survive page refreshes and browser restarts within the same browser profile.

**No backend or database is required.**

## 📱 Responsive Design

The interface adapts for desktop, laptop, tablet, and mobile use. Layouts, cards, task controls, forms, and navigation remain usable on smaller screens.

## 📁 Project Structure

```text
Smart_Study_Planner/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` → Application structure
- `style.css` → UI, responsive layout, and theme styling
- `script.js` → Application logic and localStorage persistence
- `README.md` → Project documentation

<a id="getting-started"></a>

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohanramasamy2005-eng/Smart_Study_Planner.git
cd Smart_Study_Planner
```

### 2. Open the application

Open `index.html` in a current web browser. No installation, build step, package manager, or server is needed.

<a id="future-improvements"></a>

## 🔮 Future Improvements

- Import and export study data.
- Calendar and weekly study views.
- Optional browser reminders for upcoming sessions.
- Custom study goals and session insights.

---

<div align="center">
  Built as a focused study productivity portfolio project.
</div>
