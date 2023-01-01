import React from 'react'
import ReactDOM from 'react-dom/client'
// import FocuScreen from '../useRef/FocuScreen'
// import MultipleCustomHooks from './Examples/MultipleCustomHooks'
// import HooksApp from './HooksApp'
import './index.css'
import Memorize from './Memos/Memorize'
// import Layout from './useLayoutEffect/Layout'
// import FormWithCustomHook from './useEffect/FormWithCustomHook'
// import SimpleForm from './useEffect/SimpleForm'
// import CounterApp from './UseState/CounterApp'
// import CounterWithCustomHook from './UseState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>
)
