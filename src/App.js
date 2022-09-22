import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './styles/App.css'

//ruteo

function App() {
  return (
    <div className="appContainer">
        <Header />
        <TaskForm/>
    </div>
  );
}

export default App;
