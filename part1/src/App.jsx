const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.course}

      </p>
    </div>
  )
}

const Part1 = (props) => {
  console.log(props);
  return(
    <div>
      {props.part1}
      {props.exercises1}
      {console.log(props.exercises1)}
    </div>
  )
}

const Part2 = (props) => {
  console.log(props);
  return(
    <div>
      {props.part2}
      {props.exercises2}
    </div>
  )
}

const Part3 = (props) => {
  console.log(props);
  return(
    <div>
      {props.part3}
      {props.exercises3}
    </div>
  )
}
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part1 part1={props.part1}  exercises1={props.exercises1}   />
      {console.log(props.exercises1)}
      <Part2 part2={props.part2} exercises2={props.exercises2}  />

      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <div>
      {props.exercises1 + props.exercises2 + props.exercises3}
      {console.log(props.exercises1 + props.exercises2 + props.exercises3)}
    </div>
  )
}

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
      {/* <Header course={course}/> */}
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      {/* <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> */}
    </div>
  )
}

export default App