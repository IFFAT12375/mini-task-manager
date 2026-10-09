
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  toggleTask,
  fetchTasks,
} from "../features/tasksSlice";
import { setCompletedCount } from "../features/statsSlice";

export default function Tasks() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state) => state.tasks
  );

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    const count = items.filter((task) => task.completed).length;
    dispatch(setCompletedCount(count));
  }, [items, dispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    dispatch(addTask(trimmedTitle));
    setTitle("");
  }

  return (
    <section>
      <h1>My Tasks</h1>
      <p>Add a task or mark one as complete.</p>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">Add task</button>
      </form>

      {loading && <p>Loading tasks...</p>}
      {error && <p role="alert">Error: {error}</p>}

      {!loading && !error && items.length === 0 && (
        <p>No tasks yet. Add your first task!</p>
      )}

      <div className="task-list">
        {items.map((task) => (
          <label className="task card" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />

            <span className={task.completed ? "done" : ""}>
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}