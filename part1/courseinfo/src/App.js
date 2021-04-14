import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} exercises1={exercises1}
        name2={part2} exercises2={exercises2}
        name3={part3} exercises3={exercises3} />
      <Total part1={exercises1} part2={exercises2} part3={exercises3} />
    </div>
  )
}

const Header = (course) => {
  return (<h1>{course.course}</h1>);
}

const Content = (section) => {
  return (
    <div>
      <Part name={section.name1} exercises={section.exercises1} />
      <Part name={section.name2} exercises={section.exercises2} />
      <Part name={section.name3} exercises={section.exercises3} />
    </div>);

}

const Part = (part) => {
  return (<p>{part.name} {part.exercises}</p>);
}

const Total = (exercises) => {
  return (
    <p>
      Number of exercises {exercises.part1 + exercises.part2 + exercises.part3}
    </p>
  )
}

export default App
