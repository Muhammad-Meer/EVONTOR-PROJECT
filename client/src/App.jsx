import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'
import Navbar from './Navbar'




const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
       <h1>hu {count}</h1>
       <button onClick={ () => dispatch(increment())}>+</button>
       <button onClick={ () => dispatch(decrement())}>+</button>
           <Navbar/>

    </>
  )
}

export default App