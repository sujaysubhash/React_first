import './App.css';
// import Input from './Input';
import Login from './Login';
function App() {
  return (
   <div>
      <h1 className='heading'>Hello, this is the Form page</h1>
      <div className="login-box">
          <Login/>
      </div>
   </div>
    //one component should only returns one value.
  );
}

export default App;
//its a component and it can be used in the index.js file to injuct it in the page.
