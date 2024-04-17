import { useState } from "react";

function OrganicCreate(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

    function create(){
        let data = {name, email, password}
        {
            fetch("http://localhost:3000/organichealth",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
                result.json().then((response)=>{
                    console.warn(response)
                })
            })
        }
    }
    return(
        <div>
            <h1>OrganicCreate</h1>
            <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Name"/><br/><br/>
            <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="email-id"/><br/><br/>
            <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="password"/><br/><br/>
            <button onClick={create}>Add Member</button>
        </div>
    )
}
export default OrganicCreate;