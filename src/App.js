import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'

import { increment } from './actions';
import { decrement } from './actions';

const App = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state =>state.counter);
  const isLogin = useSelector(state => state.isLogin)

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(2))}>-</button>

    {isLogin ? <h3>valuable info i should not see</h3>: '' }
      
    </div>
  )
}

export default App