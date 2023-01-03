import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "./new.scss";
import { useState } from "react";


const New = ({inputs, title}) => {

const [file, setFile]= useState("");



  return (
    <div className="new">
      <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : "https://img.freepik.com/premium-vector/camera-icon-symbol-template-camera-outline-icon-isolated-white-background_664675-534.jpg?w=2000"} alt="img"/>
        </div>
        <div className="right">
          <form>
          <div className="formInputs">
                <label htmlFor="file">
                  Image:<DriveFolderUploadOutlinedIcon className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

            {inputs.map((input)=>(
            <div className="formInputs" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              
             
              <button>Send</button>

          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default New;