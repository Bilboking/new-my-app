//** importing compnents into the App.js file */
import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
//** These are the <div>'s that are injected into the index.html file 'root' */
//** rendered to the DOM through or from the index.js file logic */
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
