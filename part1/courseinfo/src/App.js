import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

const Header = (course) => {
  return (<h1>{course.name}</h1>);
}

const Content = (parts) => {
  return (
    <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]} />
      <Part part={parts.parts[2]} />
    </div>);

}

const Part = (part) => {
  return (<p>{part.part.name} {part.part.exercises}</p>);
}

const Total = (parts) => {
  const total = parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

export default App
