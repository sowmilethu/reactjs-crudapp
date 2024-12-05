import axios from "axios";
import { useState } from "react"
import { API } from "../APi";
import { useNavigate } from "react-router-dom";

export default function CreateData(){
    

   const [Name,setName]=useState('');

  const pathNavi=useNavigate();

   function handle(e){
    e.preventDefault();

    if(Name===''){
        alert('warning...')
    }
    else{
        axios.post(API,{user:Name})
        
        console.log("Name "+Name);
        setName('')
        pathNavi('/');
    }


   }

    return(
        <div>
            <h1>Create Data</h1>

            <form onSubmit={handle}>
                <input type="text" className="form-control" value={Name} onChange={(e)=>setName(e.target.value)}/>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}