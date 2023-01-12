import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { Padre } from './07-tarea-memo/Padre'
// import FocuScreen from '../useRef/FocuScreen'
// import MultipleCustomHooks from './Examples/MultipleCustomHooks'
// import HooksApp from './HooksApp'
import './index.css'
// import CallBackHook from './Memos/CallBackHook'
// import MemoHook from './Memos/MemoHook'
// import Memorize from './Memos/Memorize'
// import Layout from './useLayoutEffect/Layout'
// import FormWithCustomHook from './useEffect/FormWithCustomHook'
// import SimpleForm from './useEffect/SimpleForm'
// import CounterApp from './UseState/CounterApp'
// import CounterWithCustomHook from './UseState/CounterWithCustomHook'
// import { Father } from './Reducer/07-tarea-memo-copia/Father'
// import './Reducer/intro-reducer'
// import TodoApp from './Reducer/TodoApp'
import MainApp from './UseContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
)
