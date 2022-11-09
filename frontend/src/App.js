// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";

//pages & components
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className = "pages">
          <Routes>
            <Route 
              path = "/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
 
    </div>
  );
}

export default App;


// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>