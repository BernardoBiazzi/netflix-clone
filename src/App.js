import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (<>
    <Navbar/>
    <div className="root-outlet">
        <Outlet/>
    </div>
  </>);
}

export default App;
