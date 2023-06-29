
import './App.css'
import Navigation from './Nav'
import Image from './images/person.png'
function App() {
  
  return( 
  <div className="App">
    <Navigation></Navigation>
      <section>
        <form>
          <img src={Image}alt=""/>
          <h2>Log In</h2>
          <label htmlFor="UserName">Username</label><br></br>
          <input type="text"placeholder="Type your username"></input><br></br><br></br>
          <label htmlFor="Password">Password</label><br></br>
          <input type="text" placeholder="Type your password"></input><br></br><br></br>
          <h3>Login</h3>
        </form>
      </section>
    </div>
  )

}

export default App
