/* eslint-disable no-unused-vars */

import './App.css'
import Modal from './components/Modal'
import { useState } from 'react'
import './modal.css'

function App() {

  const[openModal,setOpenModal]=useState(false)

  const handleClick=()=>{
    setOpenModal(true)
  }

  return (
    <>
    <div className='App'>
      <h1>Hey click on the button to open the modal</h1>
      <button className='openModalBtn' onClick={handleClick}>Open</button> 

      {openModal && <Modal closeModal={setOpenModal}/> }
    </div>
    </>
  )
}

export default App
