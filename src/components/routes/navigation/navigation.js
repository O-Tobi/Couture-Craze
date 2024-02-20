import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.scss';
import {ReactComponent as CrownLogo} from '../../../assets/crown.svg';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            
            <div className='nav-link-container'>
                <Link className='nav-link' to='/Shop'>
                    SHOP
                </Link>

                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
         <Outlet />
      </Fragment>
    );
  };
  
export default Navigation;  