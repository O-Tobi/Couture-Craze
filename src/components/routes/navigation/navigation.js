import { Outlet } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return (
      <div>
        <div><h1>I am the navigation component</h1></div>
        <main>
            <Outlet />
        </main>
      </div>
    );
  };
  
export default Navigation;  