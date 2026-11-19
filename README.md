# TaskFlow

TaskFlow is a small task manager built with React to practice and demonstrate core React concepts in a practical application.

The project is intentionally simple: users can add tasks, mark them as complete, view task statistics, navigate between pages, and switch between light and dark themes. Its main purpose is learning ReactJS application structure, state management, routing, asynchronous data, and component composition.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Load sample tasks from JSONPlaceholder
- View total, completed, and remaining task counts
- Switch between light and dark themes
- Navigate between Dashboard, Tasks, and About pages
- Responsive layout for smaller screens

## React Concepts Demonstrated

- Functional components and JSX
- Component composition and props
- Local state with `useState`
- Side effects with `useEffect`
- Derived state and conditional rendering
- Context API for global theme state
- Redux Toolkit for application state
- Async thunks and loading/error handling
- React Router for page navigation
- Controlled form inputs

## Technology Stack

- React 19
- Vite
- React Router
- Redux Toolkit and React Redux
- Context API
- JavaScript
- CSS

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
cd client
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

Run these commands from the `client` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
client/
├── public/
└── src/
    ├── features/
    │   ├── store.js          # Redux store configuration
    │   ├── statsSlice.js     # Completed-task statistics
    │   └── tasksSlice.js     # Task state and async loading
    ├── pages/
    │   ├── About.jsx
    │   ├── Dashboard.jsx
    │   └── Tasks.jsx
    ├── App.jsx               # Navigation and route configuration
    ├── ThemeContext.jsx      # Light/dark theme context
    ├── main.jsx              # Application providers and entry point
    └── index.css             # Application styles
```

## Data and State

The application loads up to 10 sample todos from the JSONPlaceholder API when the Tasks page is mounted. Newly added and updated tasks exist only in Redux state and are not persisted after a page refresh.

Theme state is managed separately through the Context API. Task and completion statistics are managed through Redux Toolkit.

## Routes

| Path | Page |
| --- | --- |
| `/` | Dashboard |
| `/tasks` | Task manager |
| `/about` | Project information |

