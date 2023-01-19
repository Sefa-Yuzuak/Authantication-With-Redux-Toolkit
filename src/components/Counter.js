import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //burada eğer birden fazla reducer varsa reducer isminide ekleriz
  const show = useSelector((state) => state.counter.showCounter); //burada eğer birden fazla reducer varsa reducer isminide ekleriz

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)) // {type: SOME_UNIQUE_IDENTIFIER, payload:10}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
