const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// This doesnt work below code, cuz of  div element nesting is needed.
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     // <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     {/* </div> */}
//   )
// }
// In the below code it's not necessary for the code to have a div element , whereas you can return an array of componenets
// Nested within an empty tag, not necessarily a div tag.
const App = () => {
  const name = 'Peter'
  const age = 10

  return [
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
     </>
  ]
}
export default App