import React, { useRef, useState } from 'react'
import ProgressBar from './ProgressBar';
import { FaUpload } from 'react-icons/fa';


function UploadForms() {

    const [file,setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileRef = useRef(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            var password = prompt('Enter the password!');
            if(password==="kaskar123!"){
            setFile(selected);
            setError(' ')
            }
            else{
                setError('Wrong Password')
                fileRef.current.value = null;
            }

        }
        else{
            setFile(null);
            setError('Pleasae select an image file (png or jpg)')
        }
    }
    
    return (
        <form>
            <label>
            <input ref={fileRef} type="file" onChange={changeHandler}/>
            <span><FaUpload/></span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForms
