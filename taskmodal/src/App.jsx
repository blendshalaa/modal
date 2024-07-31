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
      <div className='btncontainer'>
      <button className='openModalBtn' onClick={handleClick}>Show popup</button> 

{openModal && <Modal closeModal={setOpenModal}/> }
      </div>
   
      
    </div>
    </>
  )
}

export default App
