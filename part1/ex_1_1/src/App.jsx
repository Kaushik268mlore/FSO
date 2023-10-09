// import React from 'react'
// import ReactDOM from 'react-dom'
import { useState } from 'react'
// const Headers=({course})=>{
//   return (
//     <h1>{course.name}</h1>
//   )
//   }
//   const Content =({course})=>{
//     let part=course["parts"]
//     return (
//       <React.Fragment>
//          {
//          part.map((p,index) => (
//           <p key={index}> {p.name}  {p.exercise}</p>
//          ))
//         }
//       </React.Fragment>
//     )
//   }
// const Total=({course})=>{
//   var total=0;
//  const part=course["parts"]
//   part.map((p,index)=>(
//     total+=p.exercise
//   ))
//   return (
//     <p>Number of Total Exercises {total}</p>
//   )
// }

// const App = () => {
// const course={
// name:'Half Stack application development',
// parts:[{
//   name:'Fundamentals of React',
//   exercise:10, 
//       },
//     {
// name:'Using props to pass data',
// exercise:7,
//     },
//     {
//      name:'State of a component',
//      exercise:14
//     },
//   ]
// }


//   // const course = 
//   // const part1 = 'Fundamentals of React'
//   // const exercises1 = 10
//   // const part2 = 'Using props to pass data'
//   // const exercises2 = 7
//   // const part3 = 'State of a component'
//   // const exercises3 = 14

//   // return (
//   //   <div>
//   //     <h1>{course}</h1>
//   //     <p>
//   //       {part1} {exercises1}
//   //     </p>
//   //     <p>
//   //       {part2} {exercises2}
//   //     </p>
//   //     <p>
//   //       {part3} {exercises3}
//   //     </p>
//   //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//   //   </div>
//   // )
//   return [
//     <div>
//     <Headers course ={course}/>
//     <Content course={course}/>
//     <Total course={course}/>
//     </div>
//   ]
// }
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={()=> setCounter(counter + 1)}>
//         plus
//       </button>

//       <button onClick={() => setCounter(0)}> 
//         zero
//       </button>
//     </div>
//   )
// }

// const Display =(props)=>{
// return (
//   <div>{props.counter}</div>
// )
// }
// const BUTT=(props)=>{
//   return (
//     <button onClick={props.handle} >
//       {props.tt}
//     </button>
//   )
// }
// const App=()=>{
//   const [counter,setCounter]=useState(0);
//   const incre=()=>{setCounter(counter+1)};
//   const decre=()=>{setCounter(counter-1)};
//   const reset=()=>{setCounter(0)};
//   return (
//     <div>
//       <Display counter ={counter}></Display>
//       <br></br>
//       <BUTT handle={incre} tt='plus'></BUTT>
//       <BUTT handle={decre} tt='minus'></BUTT>
//       <BUTT handle={reset} tt='reset'></BUTT>
//     </div>
//   )
// }
// A more complex state, debugging React apps
const App=()=>{
  const [counter,setCounter]=useState({
    left:0,
    right:0,
  })
  const incleft=()=>{const updated={
  left:counter.left+1,
  right:counter.right,
  }
setCounter(updated)
}
  const incright=()=>{
    const update={
    left:counter.left,
    right:counter.right+1,}
    setCounter(update)
  }
return (
  <div>
    {counter.left}
    <button onClick={incleft}>incleft</button>
    {counter.right}
    <button onClick={incright}>incright</button>

  </div>
)

}


export default App