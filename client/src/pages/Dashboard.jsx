
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks.items);
  const completedCount = useSelector(
    (state) => state.stats.completedCount
  );

  return (
    <section>
      <h1>Welcome to TaskFlow 👋</h1>
      <p>Your simple space to organise your day.</p>

      <div className="stats">
        <article className="card">
          <h3>Total tasks</h3>
          <p>{tasks.length}</p>
        </article>

        <article className="card">
          <h3>Completed tasks</h3>
          <p>{completedCount}</p>
        </article>

        <article className="card">
          <h3>Remaining tasks</h3>
          <p>{tasks.length - completedCount}</p>
        </article>
      </div>

      <Link className="primary-link" to="/tasks">
        Manage tasks →
      </Link>
    </section>
  );
}