import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const categories = [
    'Definição do problema',
    'Dados',
    'Tratamento',
    'Análise exploratória',
    'Engenharia de atributos',
    'Modelagem',
    'Avaliação',
    'Deploy',
    'Documentação'
  ]

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('creditRiskTasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      {
        id: 1,
        title: 'Definir objetivo do modelo',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 2,
        title: 'Definir variável target',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 3,
        title: 'Levantar variáveis disponíveis',
        category: 'Dados',
        completed: false,
        completedAt: null
      }
    ]
  })

  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState(categories[0])

  useEffect(() => {
    localStorage.setItem(
      'creditRiskTasks',
      JSON.stringify(tasks)
    )
  }, [tasks])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed
              ? new Date()
              : null
          }
        }

        return task
      })
    )
  }

  function addTask() {
    if (newTask.trim() === '') {
      return
    }

    const task = {
      id: Date.now(),
      title: newTask,
      category: newCategory,
      completed: false,
      completedAt: null
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  function resetTasks() {
    const confirmReset = window.confirm(
      'Tem certeza que deseja resetar todas as tarefas?'
    )

    if (!confirmReset) {
      return
    }

    localStorage.removeItem('creditRiskTasks')
    window.location.reload()
  }

  function formatDate(date) {
    if (!date) {
      return ''
    }

    return new Date(date).toLocaleDateString('pt-BR')
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length

  const totalTasks = tasks.length

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Credit Risk Tracker</h1>
          <p>
            Acompanhamento do desenvolvimento do projeto
          </p>
        </div>

        <button
          className="reset-button"
          onClick={resetTasks}
        >
          Resetar tudo
        </button>
      </header>

      <main>
        <section className="progress-card">
          <div className="progress-header">
            <span>Progresso geral</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p>
            {completedTasks} de {totalTasks} tarefas concluídas
          </p>
        </section>

        <section className="form-card">
          <h2>Nova tarefa</h2>

          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            categories={categories}
            addTask={addTask}
          />
        </section>

        <section className="tasks-card">
          <h2>Etapas do projeto</h2>

          <TaskList
            tasks={tasks}
            categories={categories}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            formatDate={formatDate}
          />
        </section>
      </main>
    </div>
  )
}

export default App