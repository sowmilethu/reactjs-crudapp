import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "../APi";
import { useNavigate } from "react-router-dom";

export default function Edit(){

   const [Name,setName]=useState('');
   const [id,setId]=useState(0);

   const navi = useNavigate()
   function handle(e){
    e.preventDefault();

    if(Name===''){
        alert('warning...')
    }
    else{
        // axios.post(API,{user:Name})

        axios.put(`${API}/${id}`,{user:Name})
        
        console.log("Name "+Name);
        setName('')
        localStorage.clear()
        navi('/')
    }

   }


useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
},[])

    return(
        <div>
            <h1>Edit Data</h1>

            <form onSubmit={handle}>
                <input type="text" className="form-control" value={Name} onChange={(e)=>setName(e.target.value)}/>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}