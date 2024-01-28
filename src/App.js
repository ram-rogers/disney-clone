import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Home />} path="/home" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
