import Student from "./Student.jsx"
function App() {
  return(
    <>
    <Student name="Spiderman" age={25} isStudent={true}/>
      <Student name="Batman" age={50} isStudent={true} />
      <Student name="Thanos" age={255} isStudent={false} />
      <Student name="Dr.Strange" age={21} isStudent={true} />
      <Student age={2}/>
      <Student />
    </>
  );

}

export default App
