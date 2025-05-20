import NewTask from "./NewTasks";

export default function Tasks({ parentProjectId, tasks, onAdd, onDelete }) {
  let tasksFiltered = tasks.filter(
    (task) => task.projectId === parentProjectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasksFiltered.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yets.
        </p>
      )}

      {tasksFiltered.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasksFiltered.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
