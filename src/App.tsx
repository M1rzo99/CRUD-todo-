import React from 'react'
import { FaClipboardList, FaPen } from 'react-icons/fa'
import ToDOList from './components/ToDOList'
import './CSS/App.css'

export default function App():JSX.Element {
  return (
    <div className='App'>
      <div className='header'>
    <div className='logoside'>
      <FaPen/>
      <h1>What To Do</h1>
      <FaClipboardList/>
    </div>
      </div>
      <ToDOList/>
    </div>
  )
}
