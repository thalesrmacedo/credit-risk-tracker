function TaskItem({
  task,
  toggleTask,
  deleteTask,
  updateLearning
}) {
  return (
    <div className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <div className="task-info">
          <span
            className={
              task.completed
                ? 'task-title completed'
                : 'task-title'
            }
          >
            {task.title}
          </span>

          <textarea
            className="learning-input"
            placeholder="O que aprendi com esta etapa?"
            value={task.learning || ''}
            onChange={(event) =>
              updateLearning(task.id, event.target.value)
            }
          />
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