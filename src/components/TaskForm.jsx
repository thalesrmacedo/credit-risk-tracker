function TaskForm({
  newTask,
  setNewTask,
  newCategory,
  setNewCategory,
  categories,
  addTask,
  resetTasks
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <select
        value={newCategory}
        onChange={(event) => setNewCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button onClick={addTask}>
        Adicionar
      </button>

      
    </div>
  )
}

export default TaskForm