import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './App.scss';

function App() {
  return (<>
    <Navbar/>
    <div className="root-outlet" data-testid="app">
        <Outlet/>
    </div>
  </>);
}

export default App;
