import {  useSelector } from 'react-redux';

import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

function App() {
  const isUserAuth = useSelector((state) => state.auth.isAuthanticated)

  return (
    <Fragment>
      <Header/>
      {!isUserAuth &&<Auth/>}
      {isUserAuth &&<UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
