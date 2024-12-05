import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../APi";
import { useNavigate } from "react-router-dom";
import CreateData from "./CreateData";
 

export default function GetData() {
    const [getData, setGetData] = useState([]);
    const [noData, setNoData] = useState("");
  

    function handle(id){
      console.log(id);
        const ConfirmMassage = window.confirm('R U Delete This Item');

        if(ConfirmMassage===true){
            axios.delete(`${API}/${id}`).then(()=>{
                axios.get(API).then((response)=>{
                    setGetData(response.data)
                })
            })
            alert('data Deted...😢')
        }
        else{
            alert(' You Have Saved The Data😊')
        }
      
        

    }

    useEffect(() => {
        axios.get(API).then((response) => {
            if (response.data.length === 0) {
                setNoData("No Data Found...😢😢");
            } else {
                setGetData(response.data);
                setNoData(""); // Clear any previous "no data" message
            }
          
        }).catch((error) => {
            console.error("Error fetching data:", error);
            setNoData("Failed to fetch data...😢😢");
        });
    }, []);


    const navi = useNavigate();
    function edit(id,user){
        console.log(id,user);
        localStorage.setItem('id',id);
        localStorage.setItem('name',user)

        navi('/edit')

    }

    return (
        <div>
            <h1>Get Data From Mock API</h1>
            
            {getData.length > 0 ? (
                <table className="table table-bordered text-white">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>EDIT</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.user}</td>
                                <td><button onClick={()=>edit(item.id,item.user)} className="btn btn-success">Edit</button></td>
                                <td><button onClick={()=>handle(item.id)} className="btn btn-danger">Delete</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1 className="text-danger">{noData}</h1>
           
                
            )}
            <CreateData/>
        </div>
    );
}
