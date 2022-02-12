import Sidebar from './Sidebar';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  return (
    <div className='app'>
      {!user ? <Login/> : (
        <>
      <Nav/>
      <div className="app_body">
      <Sidebar/>
      <Feed/>
  
      {/*News*/}

      </div>
      </>
      )}

    </div>
  );
}

export default App;
