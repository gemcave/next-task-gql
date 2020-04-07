import { Task } from "../generated/graphql";

interface Props {
  tasks: Task[];
}
const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      <ul className="task-list">
        {tasks.map(task => {
          return (
            <li className="task-list-item" key={task.id}>
              <div className="title">{task.title}</div>
            </li>
          );
        })}
        <style jsx>{`
          ul {
            list-style: none;
            margin: 0 0 30px;
            padding: 0;
          }

          li {
            align-items: center;
            border: 1px solid #dde5ff;
            display: flex;
            padding: 14px;
          }

          li:nth-child(odd) {
            background: #fcfdff;
          }
          .title {
            margin: 0 20px;
          }
        `}</style>
      </ul>
    </>
  );
};

export default TaskList;
