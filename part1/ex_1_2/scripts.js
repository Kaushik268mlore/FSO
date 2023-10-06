import React from 'react'
import ReactDOM from 'react-dom'
const Headers=({course})=>{
  return (
    <h1>{course.name}</h1>
  )
  }
  const Content =({course})=>{
    let part=course["parts"]
    return (
      <React.Fragment>
         {
         part.map((p,index) => (
          <p key={index}> {p.name}  {p.exercise}</p>
         ))
        }
      </React.Fragment>
    )
  }
const Total=({course})=>{
  var total=0;
 const part=course["parts"]
  part.map((p,index)=>(
    total+=p.exercise
  ))
  return (
    <p>Number of Total Exercises {total}</p>
  )
}

const App = () => {
const course={
name:'Half Stack application development',
parts:[{
  name:'Fundamentals of React',
  exercise:10, 
      },
    {
name:'Using props to pass data',
exercise:7,
    },
    {
     name:'State of a component',
     exercise:14
    },
  ]
}


  // const course = 
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // return (
  //   <div>
  //     <h1>{course}</h1>
  //     <p>
  //       {part1} {exercises1}
  //     </p>
  //     <p>
  //       {part2} {exercises2}
  //     </p>
  //     <p>
  //       {part3} {exercises3}
  //     </p>
  //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  //   </div>
  // )
  return [
    <div>
    {/* <Headers course ={course}/> */}
    <Content course={course}/>
    {/* <Total course={course}/> */}
    </div>
  ]
}

export default App