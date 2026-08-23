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
      // DEFINIÇÃO DO PROBLEMA
      {
        id: 1,
        title: 'Definição do problema de negócio',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 2,
        title: 'Definição do objetivo do modelo',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 3,
        title: 'Definição da variável target',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 4,
        title: 'Definição do default',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 5,
        title: 'Definição da janela de observação',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },
      {
        id: 6,
        title: 'Definição da janela de performance',
        category: 'Definição do problema',
        completed: false,
        completedAt: null
      },

      // DADOS
      {
        id: 7,
        title: 'Levantamento das variáveis',
        category: 'Dados',
        completed: false,
        completedAt: null
      },
      {
        id: 8,
        title: 'Estruturação do dataset',
        category: 'Dados',
        completed: false,
        completedAt: null
      },

      // TRATAMENTO
      {
        id: 9,
        title: 'Análise exploratória inicial dos dados',
        category: 'Tratamento',
        completed: false,
        completedAt: null
      },
      {
        id: 10,
        title: 'Tratamento dos dados',
        category: 'Tratamento',
        completed: false,
        completedAt: null
      },
      {
        id: 11,
        title: 'Tratamento de valores ausentes',
        category: 'Tratamento',
        completed: false,
        completedAt: null
      },
      {
        id: 12,
        title: 'Tratamento de outliers',
        category: 'Tratamento',
        completed: false,
        completedAt: null
      },

      // ANÁLISE EXPLORATÓRIA
      {
        id: 13,
        title: 'Análise de correlação',
        category: 'Análise exploratória',
        completed: false,
        completedAt: null
      },

      // ENGENHARIA DE ATRIBUTOS
      {
        id: 14,
        title: 'Engenharia de atributos',
        category: 'Engenharia de atributos',
        completed: false,
        completedAt: null
      },
      {
        id: 15,
        title: 'Seleção de variáveis',
        category: 'Engenharia de atributos',
        completed: false,
        completedAt: null
      },
      {
        id: 16,
        title: 'Preparação da variável target',
        category: 'Engenharia de atributos',
        completed: false,
        completedAt: null
      },

      // MODELAGEM
      {
        id: 17,
        title: 'Divisão dos dados em treino e teste',
        category: 'Modelagem',
        completed: false,
        completedAt: null
      },
      {
        id: 18,
        title: 'Construção do modelo de Credit Scoring',
        category: 'Modelagem',
        completed: false,
        completedAt: null
      },
      {
        id: 19,
        title: 'Treinamento do modelo',
        category: 'Modelagem',
        completed: false,
        completedAt: null
      },

      // AVALIAÇÃO
      {
        id: 20,
        title: 'Avaliação do modelo',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },
      {
        id: 21,
        title: 'Avaliação de métricas de classificação',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },
      {
        id: 22,
        title: 'Análise de estabilidade e poder preditivo',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },
      {
        id: 23,
        title: 'Interpretação do modelo',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },
      {
        id: 24,
        title: 'Estimativa de Probability of Default (PD)',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },
      {
        id: 25,
        title: 'Definição das regras de decisão de crédito',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },

      // MODELAGEM / ENGINE
      {
        id: 26,
        title: 'Construção do Credit Risk Engine',
        category: 'Modelagem',
        completed: false,
        completedAt: null
      },
      {
        id: 27,
        title: 'Testes do Credit Risk Engine',
        category: 'Modelagem',
        completed: false,
        completedAt: null
      },
      {
        id: 28,
        title: 'Validação do resultado',
        category: 'Avaliação',
        completed: false,
        completedAt: null
      },

      // DOCUMENTAÇÃO
      {
        id: 29,
        title: 'Documentação técnica',
        category: 'Documentação',
        completed: false,
        completedAt: null
      },
      {
        id: 30,
        title: 'Documentação do projeto',
        category: 'Documentação',
        completed: false,
        completedAt: null
      },

      // DEPLOY
      {
        id: 31,
        title: 'Versionamento com Git/GitHub',
        category: 'Deploy',
        completed: false,
        completedAt: null
      },
      {
        id: 32,
        title: 'Deploy',
        category: 'Deploy',
        completed: false,
        completedAt: null
      },
      {
        id: 33,
        title: 'Apresentação do projeto',
        category: 'Documentação',
        completed: false,
        completedAt: null
      },
      {
        id: 34,
        title: 'Evolução e melhorias futuras',
        category: 'Documentação',
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