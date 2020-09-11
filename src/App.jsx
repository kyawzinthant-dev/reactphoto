import React, { useState, useEffect } from 'react'
import './App.css';
import UploadForms from './components/UploadForms';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [darkmode, setDarkmode] = useState(false);

    function toggleDark(e){
        if(e.keyCode && e.keyCode===32){
            e.preventDefault();
            setDarkmode(!darkmode);
        }
        else{
            setDarkmode(!darkmode);
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', toggleDark)
        return ()=>{
            document.removeEventListener('keydown',toggleDark)
        }
    })

    useEffect(()=>{
        document.body.style.backgroundColor = darkmode ? "black":"lightyellow";
    },[darkmode])

    return (
        <div className="container">
         <h1>Photo Uploader</h1>
        <h5 onClick={toggleDark}>Press Space or click here to Change {darkmode? 'light': 'dark'} Mode </h5>
         <UploadForms/>   
         <ImageGrid setSelectedImg={setSelectedImg}/>
         
         {
             selectedImg &&
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>

         }
        </div>
    )
}

export default App
