import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Hello from './Hello';
//Lab 8 and 9 are almost same just in lab 8 you need to create function and class in app.js while in 9 you have to seperate
//when we export another class or function in app.js and in index.js we can run using app because App.js file export the function or class component and 
//index just imports whatwver is exported from App.js
// function App() {
  //  const name = "Alice";
  // return (
    
  //   //JSX must have one parent
  //   <div>
  //   <h1>Hello world</h1>
  //   <h1>Hello, {name}!</h1>
  //   <p>This is a JSX example.</p>
  //   {/* <Welcome /> */}
  //   {/* <Hello /> */}
  //   </div>
  function App(){
    return(
      <>
        This is jsx demo
      </>
    )
  }
    
  




  );
}

export default App;
