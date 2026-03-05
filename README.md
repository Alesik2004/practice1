1. Создание проекта

Для создания проекта был использован инструмент Vite.
В терминале были выполнены следующие команды:

npm create vite@latest
npm install
npm run dev

После запуска проекта в терминале появилась ссылка:

http://localhost:5173/

2. Создание структуры проекта

В папке src была создана новая папка components, которая предназначена для хранения всех компонентов приложения.

Структура проекта стала следующей:

src
 ├ components
 ├ App.jsx
 ├ main.jsx

components — папка для компонентов интерфейса

App.jsx — главный компонент приложения

main.jsx — файл запуска React-приложения

3. Создание компонента Header

В папке components был создан файл Header.jsx.

Этот компонент отвечает за отображение заголовка приложения.

Пример кода компонента:

function Header() {
  return (
    <header>
      <h1>Список задач</h1>
    </header>
  )
}

export default Header

Компонент представляет собой функцию, которая возвращает JSX-разметку с заголовком страницы.

4. Создание компонента TaskItem

Далее был создан компонент TaskItem.jsx, который отвечает за отображение одной задачи.

function TaskItem({ title }) {
  return (
    <li>{title}</li>
  )
}

export default TaskItem

Компонент принимает данные через props.
В данном случае передается параметр title, который отображается в списке задач.

5. Создание компонента TaskList

Следующим шагом был создан компонент TaskList.jsx, который содержит список задач.

import TaskItem from "./TaskItem"

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} title={task} />
      ))}
    </ul>
  )
}

export default TaskList

В компоненте используется массив задач.
Метод map() проходит по каждому элементу массива и создаёт компонент TaskItem для каждой задачи.

6. Подключение компонентов в App.jsx

В файле App.jsx были импортированы созданные компоненты.

import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {

  const tasks = [
    "Сделать домашнее задание",
    "Изучить React",
    "Подготовить проект"
  ]

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App

Компонент App является главным компонентом приложения и объединяет остальные компоненты.

7. Подключение стилей

Для стилизации интерфейса был создан файл App.css.

Файл был подключён в App.jsx через import "./App.css" вначале
8. Итоговая структура проекта

После выполнения всех шагов структура проекта выглядит следующим образом:

src
 ├ components
 │   ├ Header.jsx
 │   ├ TaskList.jsx
 │   └ TaskItem.jsx
 │
 ├ App.css
 ├ App.jsx
 └ main.jsx
9. Результат работы

В результате выполнения практической работы было создано React-приложение «Список задач».

В приложении реализованы:

компонентная структура React

использование функциональных компонентов

передача данных через props

отображение списка задач

базовая стилизация интерфейса

Приложение успешно запускается и отображается в браузере.
<img width="1145" height="769" alt="image" src="https://github.com/user-attachments/assets/53ce5377-2af5-4d7a-9294-4e453f8d8862" />

<img width="1280" height="675" alt="image" src="https://github.com/user-attachments/assets/4dba6213-861d-4ca0-ac3c-12b4e98c484c" />
