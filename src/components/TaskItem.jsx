function TaskItem({
  task,
  toggleTask,
  deleteTask,
  formatDate
}) {
  return (
    <div className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <div>
          <span
            className={
              task.completed
                ? 'task-title completed'
                : 'task-title'
            }
          >
            {task.title}
          </span>

          {task.completed && (
            <small className="task-date">
              Concluído em: {formatDate(task.completedAt)}
            </small>
          )}
        </div>
      </div>

      <button
        className="delete-button"
        onClick={() => deleteTask(task.id)}
      >
        Excluir
      </button>
    </div>
  )
}

export default TaskItem