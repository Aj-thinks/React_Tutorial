import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'


//import ModalBox from './pages/ModalBox';
import MainMenu from './myapi/MainMenu';
import TodoList from './myapi/TodoList';


function App() {
  return (
    <div >
      {/*<ModalBox />*/}
      <MainMenu />
    </div>
  );
}

export default App;
