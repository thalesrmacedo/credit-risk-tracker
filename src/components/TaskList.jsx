import TaskItem from './TaskItem'

function TaskList({
  tasks,
  categories,
  toggleTask,
  deleteTask,
  updateLearning
}) {
  return (
    <div>
      {categories.map((category) => {
        const categoryTasks = tasks.filter(
          (task) => task.category === category
        )

        if (categoryTasks.length === 0) {
          return null
        }

        return (
          <div key={category}>
            <h3 className="category-title">
              {category}
            </h3>

            {categoryTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                updateLearning={updateLearning}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default TaskList