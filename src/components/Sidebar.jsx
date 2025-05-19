import { PROJECTS } from "../data";
import Button from "./Button";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      {/* {PROJECTS.length > 0 && (
        <ul>
          {PROJECTS.map((project, index) => (
            <li key={index}>{project.project_name}</li>
          ))}
        </ul>
      )} */}
    </aside>
  );
}
