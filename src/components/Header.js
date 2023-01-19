import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const isUserAuth = useSelector((state) => state.auth.isAuthanticated)
  
  const logOutHandler = () => {
    dispatch(authActions.logout())
  };

  return (
    <header className={classes.header}>
      <h1>Redux Toolkit Auth</h1>
      {isUserAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
