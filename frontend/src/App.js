import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import NavBar from './components/navbar';
import Dashboard from './components/dashboard';

const App = () => {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
