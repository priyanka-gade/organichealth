
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function OrganicUpdate(){
    const { id } = useParams();
    console.log(id);

    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

    useEffect(()=>{
        // let data = {name, email,password}
        fetch('http://localhost:3000/organichealth/4')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            
            console.error('Error:', error);
        });
    },[])

    return(
        <div>
            <h1>OrganicUpdate</h1>
            <input onChange={(e)=>setname(e.target.value)} placeholder="Name" value={name}/><br/><br/>
            <input onChange={(e)=>setemail(e.target.value)} placeholder="email-id" value={email}/><br/><br/>
            <input onChange={(e)=>setpassword(e.target.value)} placeholder="password" value={password}/><br/><br/>
            <button>Update</button>
        </div>
    )
}
export default OrganicUpdate;