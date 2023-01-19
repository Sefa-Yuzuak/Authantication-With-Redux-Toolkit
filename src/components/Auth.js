import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const [userName, setUserName]=useState('');
  const [password, setPassword]=useState();
  const [errorMess, setErrorMess]=useState(false);
  const isUserAuth = useSelector((state) => state.auth.isAuthanticated)

  const dummyUser = {
    username:'sefa@sefa.com',
    password1:'123'
  }
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(userName === dummyUser.username && password === dummyUser.password1){
      dispatch(authActions.login())
    }else{setErrorMess(true) }
    
  };
  const userNameHandler = (event) => {
    setUserName(event.target.value)
    setErrorMess(false)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
    setErrorMess(false)
  }
  const loginPanel =    
    <main className={classes.auth}>
      <section>
        <form onSubmit = {formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={userNameHandler}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={passwordHandler}/>
          </div>
          <button>Login</button>
          {errorMess && <p>Password or Username is invalid!</p>}
        </form>
      </section>
    </main>



  return (
    <div>
      {!isUserAuth && loginPanel}
    </div>
  );
};

export default Auth;
